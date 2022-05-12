import styled from 'styled-components';

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-sizing: border-box;
  line-height: 5rem;
  overflow: hidden;
  font-size: 1.8rem;
  overflow-wrap: break-word;
  word-break: break-word;
  padding: 0 2.5rem;
  font-family: "JetBrains Mono", monospace;
  background-color: ${props => props.theme.colors.secondary};

  & div {
    position: relative;
    bottom: ${props => props.scroll}rem;
  }
`;

export const GameWord = styled.span`
  white-space: pre;
  display: inline-block;
`;

export const WhiteSpace = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.colors.secondary};
`;
