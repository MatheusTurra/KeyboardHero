import styled from "styled-components";

export const TimerContainer = styled.div`
  width: 8rem;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.secondary};

  & span {
    display: ${props => props.showTimer === false && "none"};
  }
`;