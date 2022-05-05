import styled, { keyframes } from 'styled-components';

function changeFeedbackColor(isLetterRight) {
  if(isLetterRight === null) return;

  if(isLetterRight) return "green";
  else return "red";
}


function changeWhitespaceColor(show, isLetterRight) {
  if(show) {
    if(isLetterRight === false) return "salmon";
    else return "blue";
  }
}

export const LeftChunk = styled.span`
  color: ${props => 
    props.isLetterRight === false 
      ? "crimson"
      :"lightgreen"
  };
`;

export const CurrentWord = styled.span`
  white-space: pre;
  background-color: ${props => changeFeedbackColor(props.isLetterRight)}; 
`;
const blinkCursor = keyframes`
  50% {
    opacity: 0.6;
  }
`;

export const WordCursor = styled.span`
  animation: ${blinkCursor} 1s infinite alternate;
  background-color: ${props => 
    props.isLetterRight === false
    ? "salmon"
    : "grey"}; 
`;

export const WhiteSpace = styled.span`
  animation: ${blinkCursor} 1s infinite alternate;
  background-color: ${props => changeWhitespaceColor(props.show, props.isLetterRight)};
`;
