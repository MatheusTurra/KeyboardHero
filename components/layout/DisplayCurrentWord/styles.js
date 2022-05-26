import styled, { css, keyframes } from 'styled-components';

function changeFeedbackColor(isLetterRight, theme) {
  if(isLetterRight === null) return;
  if(isLetterRight) return theme.currentRightWordBackground;
  else return theme.currentWrongWordBackground;
}

function changeCursorColor(show, isLetterRight, theme) {
  if(show) {
    if(isLetterRight === false) return theme.wrongCursorColor;
    else return theme.rightCursorColor;
  }
}

const blinkCursor = keyframes`
  50% {
    opacity: 0.6;
  }
`;

export const CurrentWord = styled.span`
  border-radius: 0.3rem;
  display: inline-block;
  background-color: ${props => changeFeedbackColor(props.isLetterRight, props.theme.gameText)}; 
`;

export const WordCursor = styled.span`
  display: inline-block;
  border-radius: 0.3rem;
  animation: ${props => props.showCursor && css`${blinkCursor} 1s infinite alternate`};
  background-color: ${props => changeCursorColor(props.showCursor, props.isLetterRight, props.theme.gameText)}; 
`;

export const WhiteSpace = styled.span`
  display: inline-block;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  animation: ${props => props.showCursor && css`${blinkCursor} 1s infinite alternate`};
  background-color: ${props => changeCursorColor(props.show, props.isLetterRight, props.theme.gameText)};
`;
