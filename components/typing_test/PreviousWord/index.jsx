import { useContext } from "react";
import { GameContext } from "../../../providers/GameContext";
import { useCalcWpm } from "../../../utils/useCalcWpm";

import { 
  WpmFeedback,
  WrongWord,
  WhiteSpace,
  RightWord
} from "./styles";

export function PreviousWord({ word, wordIndex }) {
  const { state } = useContext(GameContext);
  const { wordStatus } = state;
  
  const wpm = useCalcWpm();
  
  if(wordStatus[wordIndex]) {
    return(
      <>
        <RightWord>
          <WpmFeedback>{wpm}</WpmFeedback>
          {word}
        </RightWord>
        <WhiteSpace>&nbsp;</WhiteSpace>
      </>
    );
  }
  
  return(
    <>
      <WrongWord>
        <WpmFeedback>{wpm}</WpmFeedback>
        {word}
      </WrongWord>
      <WhiteSpace>&nbsp;</WhiteSpace>
    </>
  );
}