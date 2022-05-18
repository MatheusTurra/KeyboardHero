import { PreviousWord } from "../PreviousWord";
import DisplayCurrentWord from "../DisplayCurrentWord";

import { GameContext } from "../../../providers/GameContext";

import { useRef, useContext, useEffect, useState, memo } from "react";

import {
  TextContainer,
  GameWord,
  WhiteSpace
} from "./styles";

function RenderWords({ text }) {
  const currentWordRef = useRef(null);
  
  const { state } = useContext(GameContext);
  const { currentWord, isGameStarted, isGameOver } = state;

  const [textScroll, setTextScroll] = useState(0);

  useEffect(() => setTextScroll(0), [isGameStarted]);

  useEffect(() => {
    const wordPosition = currentWordRef.current?.offsetLeft;

    if(wordPosition === 25) {
      setTextScroll(prevState => prevState + 5);
    }
  }, [currentWord]);

  
  return(
    <TextContainer scroll={textScroll}>
      <div>
        {text.map((word, index) => {
          const isCurrentWordActive = currentWord === index;
          const isPrevious = index < currentWord ? true : false;
          
          if(isPrevious) {
            return <PreviousWord key={"previous" + index} word={word} wordIndex={index}/>;
          }

          if(isCurrentWordActive && isGameStarted && isGameOver === false) {
            return (
              <span key={"current" + index} ref={currentWordRef}>
                <DisplayCurrentWord word={word}/>
              </span>
            );
          }

          return(
            <GameWord key={"word" + index}>
              {word}
              <WhiteSpace>&nbsp;</WhiteSpace>
            </GameWord>
          );
        })}
      </div>
    </TextContainer>
  );
}

export default memo(RenderWords);