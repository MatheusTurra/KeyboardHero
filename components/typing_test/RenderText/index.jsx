import styled, { css } from "styled-components";

export default function RenderText(props) {
  const splittedText = props.text.split(" ");
  console.log(props.isGameOver)
  return(
    <>

      <TextContainer isGameOver={props.isGameOver}>
        {splittedText.map((word, index) => {
          return(
            <GameText
            key={index}
            id={index}
            wordCorrect={props.correct}
            current={props.currentWord}
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
  background: ${props => props.isGameOver && "red;"}
`;


const GameText = styled.span`  
  background: ${props =>  props.id === props.current
    ? "gray;"
    : ";"
  }

  ${props =>  
      props.wordCorrect &&
      props.id === props.current 
    ? css`color: green;`
    : ""
  }

  ${props =>
      props.wordCorrect === false &&
      props.id === props.current  
    ? css`color: red;`
    : ""
  }

  font-size: 3rem;
  padding: 0.3rem;
`;
