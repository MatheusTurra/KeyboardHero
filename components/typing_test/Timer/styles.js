import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 3rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.secondary};
`;