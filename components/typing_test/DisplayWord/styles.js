import styled from 'styled-components';

export const GameWord = styled.span`
 white-space: pre;
`;

export const CurrentWord = styled.span`
  background-color: grey; 
  white-space: pre;
`;

export const WordCursor = styled.span`
  background-color: green;
`;

export const WhiteSpace = styled.span`
  background-color: ${
    props => props.show 
      ? "green"
      : props.theme.colors.secondary
  };
`