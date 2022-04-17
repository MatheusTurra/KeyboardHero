import styled from 'styled-components';


export const ResultContainer = styled.div`
  width: 80%;
  height: 5rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  margin: 1rem auto;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  & span {
    margin: 0 auto;
  }
`;