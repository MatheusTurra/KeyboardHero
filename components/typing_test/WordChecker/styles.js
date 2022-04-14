import styled from "styled-components";

export const GameGradient = styled.div`
  padding: 0.2rem;
  margin: 10rem 10rem;
  border-radius: 1rem;
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const GameContainer = styled.div`
  margin: 0 auto;
  display: grid;
  padding: 1rem 9.4rem;
  margin: 0 auto;
  border-radius: 1rem;
  align-items: center;
  grid-template-rows: 3fr 1fr;
  background-color: ${props => props.theme.colors.primary};
`;

export const UserInteractionWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 6fr 3fr 1fr 1fr;
`;

export const UserInput = styled.input`
  width: 100%;
  height: 4.5rem;
  border: 0;
  border-radius: 1rem;
  margin: 0 auto;

  & :focus {
    outline: none;
  }

`;