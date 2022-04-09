import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function RenderText(props) {
  const textContainerRef = useRef(null);

  const array = new Array(props.text.length - 1);
  const [colorFeedbackArray, setColorFeedbackArray] = useState(array);

  
  useEffect(() => {
    if(props.wordCorrect) {
      updateColorArray(props.current - 1, true);
    } 

    if(props.wordCorrect === false) {
      updateColorArray(props.current - 1, false);
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
  }, [colorFeedbackArray]);  

  useEffect(() => {
    setColorFeedbackArray(array.fill(""));
    removeFeedbackClasses();
  }, [props.resetFeedback]);

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
      <TextContainer
        ref={textContainerRef}
      >
        {props.text.map((word, index) => {
          return(
            <GameText
              key={word + index}
              mapIndex={index}
              current={props.current}
              isLetterCorrect={props.correct}
            >
              {word}
            </GameText>
          );
        })}
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

const GameText = styled.span`
  background-color: ${props => selectCurrentWord(props.mapIndex, props.current)}
  color: ${props => spellFeedback(props.mapIndex, props.current, props.isLetterCorrect)}
`;

function selectCurrentWord(index, current){
  let backgroundColor = ";";
  
  if(current === index) backgroundColor = "grey;"
  
  return backgroundColor;
}

function spellFeedback(index, current, isLetterCorrect) {
  let color = ";";

  if(current === index) {

    if(isLetterCorrect) color = "#00ff00;";
    if(isLetterCorrect === false) color = "#ff0000;";
  }

  return color;
}
