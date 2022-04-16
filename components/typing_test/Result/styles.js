import styled from 'styled-components';


export const ResultContainer = styled.div`
  width: 80%;
  height: 5rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;