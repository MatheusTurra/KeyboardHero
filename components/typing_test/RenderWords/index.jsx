import { PreviousWord } from "../PreviousWord";
import DisplayCurrentWord from "../DisplayCurrentWord";

import { GameContext } from "../../../providers/GameContext";

import { useRef, useContext, useEffect, useState } from "react";

import {
  TextContainer,
  GameWord,
  WhiteSpace
} from "./styles";

export default function RenderLetters({ text }) {
  const currentWordRef = useRef(null);
  
  const { state } = useContext(GameContext);
  const { currentWord, isGameStarted } = state;

  const [textScroll, setTextScroll] = useState(0);

  useEffect(() => {
    const wordPosition = currentWordRef.current?.offsetLeft;

    if(wordPosition === 0) {
      setTextScroll(prevState => prevState + 5);
    }
  }, [currentWord]);


  useEffect(() => {
    setTextScroll(0);
  }, [isGameStarted])
  return(
    <> 
      <TextContainer scroll={textScroll}>
        <div>
          {text.map((word, index) => {
            const isCurrentWordActive = currentWord === index;
            const isPrevious = index < currentWord ? true : false;
            
            if(isPrevious) {
              return <PreviousWord key={"previous" + index} word={word} wordIndex={index}/>;
            }

            if(isCurrentWordActive && isGameStarted) {
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
    </>
  );
}
