import styled from "styled-components";

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

export const TextContainer = styled.div`
  width: 90%;
  height: 12rem;
  line-height: 6rem;
  clear: both;
  overflow: hidden;
  font-size: 3.0rem;
  margin: 2rem -1.5rem;
  border-radius: 1rem;
  padding: 0.6rem 3.3rem 1rem 1.2rem;
  overflow-wrap: break-word;
  background-color: ${props => props.theme.colors.secondary};
  
  & span {
    padding-left: 0.7rem;
  }

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

export const GameText = styled.span`
  background-color: ${props => selectCurrentWord(props.mapIndex, props.current)}
  color: ${props => spellFeedback(props.mapIndex, props.current, props.isLetterCorrect)}
`;