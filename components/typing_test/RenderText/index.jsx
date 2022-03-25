import styled from "styled-components";

// usar uma prop key no styled components
export default function RenderText(props) {
  const splittedText = props.text.split(" ");

  return(
    <>
      {splittedText.map((word, index) => {
        return(
          <GameText
          key={index} 
          wordNumber={index}
          textIndex={props.textIndex}
          >
            {word}
          </GameText>
        );
      })}
    </>
  );
}

const GameText = styled.span`
  background: ${props => 
    props.wordNumber === props.textIndex
    ? "gray;"
    : "white;"
  }
  font-size: 3rem;
  padding: 0.3rem;
`;
