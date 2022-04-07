import { useEffect, useState } from "react";

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
    const wpmCalc = ((props.correctKeyPresses - props.incorrectKeyPresses) / 5) / (props.maxTime - props.timeLeft) * 60; 
    setWpm(wpmCalc.toFixed());
  }, [props.timeLeft]);

  return(
    <>
      <div>
        <p>{wpm} : {accuracy}</p>
      </div>
    </>
  );
}