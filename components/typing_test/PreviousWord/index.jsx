import { useContext } from "react";
import { GameContext } from "../../../providers/GameContext";

import { 
  WrongWord,
  WhiteSpace,
  RightWord
} from "./styles";

export function PreviousWord({ word, wordIndex }) {
  const { state } = useContext(GameContext);
  const { wordStatus } = state;
  
  if(wordStatus[wordIndex]) {
    return(
      <>
        <RightWord>
          {word}
        </RightWord>
        <WhiteSpace>&nbsp;</WhiteSpace>
      </>
    );
  }
  
  return(
    <>
      <WrongWord>
        {word}
      </WrongWord>
      <WhiteSpace>&nbsp;</WhiteSpace>
    </>
  );
}