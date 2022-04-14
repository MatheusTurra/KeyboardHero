import styled from 'styled-components';


export const ResultContainer = styled.div`
  width: 65%;
  height: 4rem;
  font-size: 2.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
`;
