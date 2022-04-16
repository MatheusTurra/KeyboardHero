import { useEffect, useRef, useState } from "react";

import { TextContainer, GameText } from "./styles";

let shouldScrollTop = false;

export default function RenderText(props) {
  const textContainerRef = useRef(null);

  const array = new Array(props.text.length - 1);
  const [colorFeedbackArray, setColorFeedbackArray] = useState(array);
  const [textScrollTop, setTextScrollTop] = useState(0);

  useEffect(() => {
    if(props.wordCorrect) {
      updateColorArray(props.current - 1, true);
    } 
  
    if(props.wordCorrect === false) {
      updateColorArray(props.current - 1, false);
    }

    shouldScrollTop = true;
  }, [props.wordCorrect, props.current]);

  useEffect(() => {
    const textRef = textContainerRef.current;

    if(textRef.children[props.current - 1] !== undefined) {
      if(colorFeedbackArray[props.current - 1]) {
        textRef.children[props.current -1].className = "correct";
      } else {
        textRef.children[props.current -1].className = "incorrect"; 
      }
    }
  }, [colorFeedbackArray]);  

  useEffect(() => {
    setColorFeedbackArray(array.fill(""));
    removeFeedbackClasses();
    setTextScrollTop(0);
    
    shouldScrollTop = false;
  }, [props.resetFeedback]);

  useEffect(() => {
    if(shouldScrollTop === false) return;

    const currentWordPosition = textContainerRef.current.children[props.current].offsetLeft;
 
    if(currentWordPosition === 0) setTextScrollTop(prevState => prevState + 5);
  }, [props.current]);

  function removeFeedbackClasses() {
    const textChildren = textContainerRef.current.children;
    
    for(let i = 0; i < props.text.length - 1; i++) {
      textChildren[i].className = "";
    }
  }

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
          {props.text.map((word, index) => {
            return(
              <GameText
                id={index}
                key={word + index}
                mapIndex={index}
                current={props.current}
                isLetterCorrect={props.letterCorrect}
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
