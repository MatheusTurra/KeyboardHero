import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  width: 8rem;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.secondary};
`;