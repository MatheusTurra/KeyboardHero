import styled from "styled-components";

export const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;

  @media(min-width: 768px) {
    max-width: 125rem;
  }
`;

export const ContainerGradient = styled.div`
  height: 12rem;
  padding: 0.3rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 1rem rgba(0,30,84, 0.50);
  
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

export const UserContainerGradient = styled.div`
  padding: 0.3rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 1rem rgba(0,30,84, 0.50);
  width: 100%;
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const UserInteractionWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.secondary};
  
  @media(min-width: 768px) {
    flex-direction: row;
    grid-template-columns: 6fr 2fr 1fr 1fr;
  }
`;

export const UserInput = styled.input`
  width: 100%;
  height: 4.4rem;
  border: 0;
  border-radius: 1rem;
  margin: 0 auto;
  font-size: 2.2rem;
  background-color: #d3dbe3;

  & :focus {
    outline: none;
  }

`;