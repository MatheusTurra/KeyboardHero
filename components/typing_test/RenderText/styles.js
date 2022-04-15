import styled, { css } from "styled-components";

function selectCurrentWord(theme, index, current){
  let backgroundColor = "";
  let borderColor = "";

  if(current === index) {
    borderColor += `0.2rem solid ${theme.currentWordBorder}`;
    backgroundColor += theme.currentWordBackground;
  }
  
  return css`
    border: ${borderColor};
    background-color: ${backgroundColor};
  `;
}
  
  function spellFeedback(index, current, isLetterCorrect) {
  let color = ";";
  
  if(current === index) {
  
    if(isLetterCorrect) color = "#5bce68";
    if(isLetterCorrect === false) color = "#dc2b34";
  }
  
  return color;
}


export const TextContainer = styled.div`
  height: 12rem;
  box-sizing: border-box;
  line-height: 5rem;
  overflow: hidden;
  font-size: 3rem;
  border-radius: 1rem;
  overflow-wrap: break-word;
  padding: 1rem 10rem;
  background-color: ${props => props.theme.colors.secondary};
  
  & div {
    position: relative;
    bottom: 0rem;
    top: -${props => props.scrollTop}rem;
  }

  & span {
    padding:0 0.2rem;
    display: inline-block;
  }

  .correct {
    color: #5bce68;
  }

  .incorrect {
    color: #dc2b34;
  }
`;

export const GameText = styled.span`
  border-radius: 0.5rem;
  ${props => selectCurrentWord(props.theme.gameText, props.mapIndex, props.current)};
  color: ${props => spellFeedback(props.mapIndex, props.current, props.isLetterCorrect)}
`;