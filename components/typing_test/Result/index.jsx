import { useEffect, useState } from "react";

import {
  ResultContainer, Wrapper
} from "./styles";

export default function Result(props) {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    if(props.keyPresses > 0) {
      const accuracyCalc = (props.correctKeyPresses / props.keyPresses) * 100;

      setAccuracy(accuracyCalc.toFixed());
    }
  }, [props.correctKeyPresses]);


  useEffect(() => {
    if(props.timeLeft > 0) {
      const wpmCalc = ((props.correctKeyPresses - props.incorrectKeyPresses) / 5) / (props.maxTime - props.timeLeft) * 60; 
      
      setWpm(wpmCalc > 0 ? wpmCalc.toFixed(0) : 0);
    }
  }, [props.timeLeft]);

  useEffect(() => {
    if(props.isGameReseted) {
      setWpm(0);
      setAccuracy(0);
    }
  }, [props.isGameReseted]);

  return(
    <>
      <ResultContainer>
        <Wrapper>
          <span>Precisão: {accuracy}</span>
          <span>Palavras por Minuto: {wpm}</span>
        </Wrapper>
      </ResultContainer>
    </>
  );
}