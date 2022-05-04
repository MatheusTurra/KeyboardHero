import styled from "styled-components";

export const Container = styled.div`
  max-width: 92%;
  margin: 5rem auto;
  
  @media(min-width: 768px) {
    width: 50%;
  }
`;

export const ContainerGradient = styled.div`
  padding: 0.3rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 1rem rgba(0,30,84, 0.50);
  
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const GameContainer = styled.div`
  height: 23rem;
  border-radius: 1rem;
`;

export const UserInteractionGradient = styled.div`
  border-radius: 1rem;
  margin-top: 3rem;
  width: 99%;
  height: 6rem;
  padding: 0.3rem;

  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };

`;

export const UserInteractionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.secondary};
`;

export const UserInput = styled.input`
  outline: none;
  border: 0;
  font-size: 2rem;
  height: 90%;
  color: ${props => props.theme.colors.text};
  margin-left: 0.3rem;
  background-color: ${props => props.theme.colors.secondary};
`;