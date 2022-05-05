import styled, { keyframes } from 'styled-components';

function changeFeedbackColor(isLetterRight, theme) {
  if(isLetterRight === null) return;
  console.log(theme);
  if(isLetterRight) return theme.currentRightWordBackground;
  else return theme.currentWrongWordBackground;
}


function changeWhitespaceColor(show, isLetterRight) {
  if(show) {
    if(isLetterRight === false) return "#e66063";
    else return "#56ab91";
  }
}

export const LeftChunk = styled.span`
  color: ;
`;

export const CurrentWord = styled.span`
  white-space: pre;
  /* border-radius: 0.3rem; */
  background-color: ${props => changeFeedbackColor(props.isLetterRight, props.theme.gameText)}; 
`;
const blinkCursor = keyframes`
  50% {
    opacity: 0.6;
  }
`;

export const WordCursor = styled.span`
  border-radius: 0.3rem;
  animation: ${blinkCursor} 1s infinite alternate;
  background-color: ${props => 
    props.isLetterRight === false
    ? "#e66063"
    : "#56ab91"}; 
`;

export const WhiteSpace = styled.span`
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  animation: ${blinkCursor} 1s infinite alternate;
  background-color: ${props => changeWhitespaceColor(props.show, props.isLetterRight)};
`;
