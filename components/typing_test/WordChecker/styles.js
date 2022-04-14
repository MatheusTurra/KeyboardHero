import styled from "styled-components";

export const GameGradient = styled.div`
  padding: 0.2rem;
  margin: 10rem 10rem;
`;


export const ContainerGradient = styled.div`
  width: 96rem;
  height: 12rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background: blue;
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
`;

export const UserContainerGradient = styled.div`
  width: 96rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background: blue;
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const UserInteractionWrapper = styled.div`
  display: grid;
  padding: 1rem;
  border-radius: 1rem;
  grid-template-columns: 6fr 3fr 1fr 1fr;
  background: ${props => props.theme.colors.secondary};
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