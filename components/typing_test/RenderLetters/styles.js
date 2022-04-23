import styled from 'styled-components';

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-sizing: border-box;
  line-height: 5rem;
  overflow: hidden;
  font-size: 2rem;
  font-weight: 600;
  overflow-wrap: break-word;
  padding:0 2rem;
  background-color: ${props => props.theme.colors.secondary}
`;
