import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function RenderText(props) {
  const array = new Array(props.text.length - 1);
  const [colorFeedback, setColorFeedback] = useState(array);

  const textContainerRef = useRef(null);
  
  useEffect(() => {
    if(props.correct) updateColorArray(props.current, true);
    if(props.correct === false) updateColorArray(props.current, false);
  }, [props.correct, props.current]);
  

  function updateColorArray(current, value) {
    setColorFeedback(prevState => {
      const newState = [...prevState];
      newState[current] = value;
      return newState;
    });
  }

  function spellFeedback() {
    return props.text.map((word, index) => {
      let classes = "";
      if(props.current === index) classes += "current ";
      
      if(colorFeedback[index]) classes += "correct";
      if(colorFeedback[index] === false) classes += "incorrect";

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
