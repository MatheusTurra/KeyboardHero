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
  const { currentWord, isGameStarted } = state;

  return(
    <> 
      <TextContainer> 
        {text.map((word, index) => {
          const isCurrentWordActive = currentWord === index;
          const isPrevious = index < currentWord ? true : false;
          
          if(isPrevious) {
            return <PreviousWord key={"previous" + index} word={word} wordIndex={index}/>;
          }

          if(isCurrentWordActive && isGameStarted) {
            return <DisplayCurrentWord key={"current" + index} word={word}/>;
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
