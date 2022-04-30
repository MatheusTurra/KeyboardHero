import styled from 'styled-components';

export const RightWord = styled.span`
  color: limegreen;
  white-space: pre;
`;

export const  WrongWord = styled.span`
  color: coral;
  white-space: pre;
  text-decoration: line-through;
  text-decoration-color: crimson;
  text-decoration-thickness: 0.25rem;
`;

export const WhiteSpace = styled.span`
  background-color: ${props => props.theme.colors.secondary};
`;
