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
      <RightWord>
        <WpmFeedback>{wpm}</WpmFeedback>
        {word}
        <WhiteSpace>&nbsp;</WhiteSpace>
      </RightWord>
    );
  }
  
  return(
    <WrongWord>
      <WpmFeedback>{wpm}</WpmFeedback>
      {word}
      <WhiteSpace>&nbsp;</WhiteSpace>
    </WrongWord>
  );
}