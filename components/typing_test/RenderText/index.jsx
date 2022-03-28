import styled, { css } from "styled-components";

export default function RenderText(props) {
  const splittedText = props.text.split(" ");

  return(
    <>
      {splittedText.map((word, index) => {
        return(
          <GameText
            key={index}
            id={index}
            shouldChangeColor={props.spellFeedback}
            wordCorrect={props.correct}
            current={props.currentWord}
          >
            {word}
          </GameText>
        );
      })}
    </>
  );
}

const GameText = styled.span`
  background: ${props =>  props.id === props.current
    ? "gray;"
    : "white;"
  }

  ${props =>  
      props.wordCorrect &&
      props.id === props.current 
    ? css`color: green;`
    : ""
  }

  ${props =>
      props.shouldChangeColor &&
      props.wordCorrect === false &&
      props.id === props.current  
    ? css`color: red;`
    : ""
  }

  font-size: 3rem;
  padding: 0.3rem;
`;
