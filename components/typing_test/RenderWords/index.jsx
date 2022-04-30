import { GameContext } from "../../../providers/GameContext";
import { memo, useContext } from "react";

import { PreviousWord } from "../WordStatus";
import DisplayCurrentWord from "../DisplayCurrentWord";

import {
  TextContainer,
  GameWord,
  WhiteSpace
} from "./styles";

function RenderLetters({ text }) {
  const { state } = useContext(GameContext);
  const { currentWord } = state;

  return(
    <> 
      <TextContainer> 
        {text.map((word, index) => {
          const isCurrentWordActive = currentWord === index;
          const isPrevious = index < currentWord ? true : false;
          
          if(isPrevious) {
            return <PreviousWord word={word} wordIndex={index}/>;
          }

          if(isCurrentWordActive) {
            return <DisplayCurrentWord word={word}/>;
          }

          return(
            <GameWord>
              {word}
              <WhiteSpace>&nbsp;</WhiteSpace>
            </GameWord>
          );
        })}
      </TextContainer>
    </>
  );
}

export default memo(RenderLetters);