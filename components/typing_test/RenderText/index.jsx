import { useEffect, useRef, useState, memo } from "react";

import { TextContainer, GameText } from "./styles";

let shouldScrollTop = false;

function RenderText({text, letterCorrect, wordCorrect, current, resetFeedback}) {
  const textContainerRef = useRef(null);

  const array = new Array(text.length - 1);
  const [colorFeedbackArray, setColorFeedbackArray] = useState(array);
  const [textScrollTop, setTextScrollTop] = useState(0);

  useEffect(() => {
    if(wordCorrect) {
      updateColorArray(current - 1, true);
    } 
  
    if(wordCorrect === false) {
      updateColorArray(current - 1, false);
    }

    shouldScrollTop = true;
  }, [wordCorrect, current]);

  useEffect(() => {
    const textRef = textContainerRef.current;

    if(textRef.children[current - 1] !== undefined) {
      if(colorFeedbackArray[current - 1]) {
        textRef.children[current -1].className = "correct";
      } else {
        textRef.children[current -1].className = "incorrect"; 
      }
    }
  }, [colorFeedbackArray, current]);  

  useEffect(() => {
    setColorFeedbackArray(array.fill(""));
    setTextScrollTop(0);
    shouldScrollTop = false;

    const textChildren = textContainerRef.current.children;
    for(let i = 0; i < text.length - 1; i++) {
      textChildren[i].className = "";
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetFeedback]);

  useEffect(() => {
    if(shouldScrollTop === false) return;

    const currentWordPosition = textContainerRef.current.children[current]?.offsetLeft;
    if(currentWordPosition === 0) setTextScrollTop(prevState => prevState + 5);
  }, [current]);

  function updateColorArray(current, value) {
    setColorFeedbackArray(prevState => {
      const newState = [...prevState];
      newState[current] = value;
      return newState;
    });
  }

  return(
    <>
      <TextContainer scrollTop={textScrollTop}> 
        <div ref={textContainerRef}>
          {text.map((word, index) => {
            return(
              <GameText
                key={word + index}
                mapIndex={index}
                current={current}
                isLetterCorrect={letterCorrect}
              >
                {word}
              </GameText>
            );
          })}
        </div>
      </TextContainer>
    </>
  );
}

export default memo(RenderText);