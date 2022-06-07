import styled from 'styled-components';

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-sizing: border-box;
  line-height: 5rem;
  overflow: hidden;
  font-size: 1.8rem;
  font-family: "JetBrains Mono", monospace;
  background-color: ${props => props.theme.colors.secondary};
  
  & div {
    padding: 0 2.5rem;
    position: relative;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
    bottom: ${props => props.scroll}rem;
  }

  & span {
    line-height: 2.5rem;
    display: inline-block;
  }
`;

export const GameWord = styled.span`
  display: inline-block;
`;

export const WhiteSpace = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.colors.secondary};
`;
