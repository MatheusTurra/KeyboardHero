import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function RenderText(props) {
  const textContainerRef = useRef(null);

  const array = new Array(props.text.length - 1);
  const [colorFeedbackArray, setColorFeedbackArray] = useState(array);

  
  useEffect(() => {
    if(props.wordCorrect) {
      updateColorArray(props.current, true);
    } 

    if(props.wordCorrect === false || props.wordCorrect === null) {
      updateColorArray(props.current, false);
    }
  }, [props.wordCorrect, props.current]);

  useEffect(() => {
    const textRef = textContainerRef.current;

    if(textRef.children[props.current -1] !== undefined) {
      if(colorFeedbackArray[props.current - 1]) {
        textRef.children[props.current -1].className = "correct";
      } else {
        textRef.children[props.current -1].className = "incorrect"; 
      }
    }
  }, [props.current]);  

  useEffect(() => {
    setColorFeedbackArray(array);
  }, [props.resetFeedback]);

  function updateColorArray(current, value) {
    setColorFeedbackArray(prevState => {
      const newState = [...prevState];
      newState[current] = value;
      return newState;
    });
  }

  function spellFeedback() {
    return props.text.map((word, index) => {
      let classes = "";
      if(props.current === index) {
        classes += "current ";
        
        if(props.correct) classes += "correct";
        if(props.correct === false) classes += "incorrect";
      }

      return(
        <span
          key={word + index}
          className={classes}
        >
          {word}
        </span>
      );
    });
  }

  return(
    <>
      <TextContainer
        ref={textContainerRef}
        isGameOver={props.isGameOver}>
          {spellFeedback()}
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  font-size: 3.0rem;

  .correct {
    color: #00ff00;
  }

  .incorrect {
    color: #ff0000;
  }

  .current {
    background-color: grey;
  }
`;
