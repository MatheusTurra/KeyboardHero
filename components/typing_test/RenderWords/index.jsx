import { GameContext } from "../../../providers/GameContext";
import { memo, useContext } from "react";

import { PreviousWord } from "../PreviousWord";
import DisplayCurrentWord from "../DisplayCurrentWord";

import {
  TextContainer,
  GameWord,
  WhiteSpace
} from "./styles";

export default function RenderLetters({ text }) {
  const { state } = useContext(GameContext);
  const { currentWord } = state;

  return(
    <> 
      <TextContainer> 
        {text.map((word, index) => {
          const isCurrentWordActive = currentWord === index;
          const isPrevious = index < currentWord ? true : false;
          
          if(isPrevious) {
            return <PreviousWord key={"prev" + index} word={word} wordIndex={index}/>;
          }

          if(isCurrentWordActive) {
            return <DisplayCurrentWord key={"curr" + index} word={word}/>;
          }

          return(
            <GameWord key={"word" + index}>
              {word}
              <WhiteSpace>&nbsp;</WhiteSpace>
            </GameWord>
          );
        })}
      </TextContainer>
    </>
  );
}

// export default memo(RenderLetters);