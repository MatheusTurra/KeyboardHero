import styled from 'styled-components';

function changeFeedbackColor(isLetterRight) {
  if(isLetterRight === null) return;

  if(isLetterRight) return "green";
  else return "red";
}


function changeWhitespaceColor(show, isLetterRight) {
  // console.log('changewhitespace', show)
  if(show) {
    if(isLetterRight === false) return "salmon";
    else return "blue";
  }
}

export const GameWord = styled.span`
  white-space: pre;
`;

export const CurrentWord = styled.span`
  white-space: pre;
  background-color: ${props => changeFeedbackColor(props.isLetterRight)}; 
`;

export const WordCursor = styled.span`
  background-color: ${props => 
    props.isLetterRight === false
      ? "salmon"
      : "blue"
  }; 
`;

export const WhiteSpace = styled.span`
  background-color: ${props => changeWhitespaceColor(props.show, props.isLetterRight)};
`