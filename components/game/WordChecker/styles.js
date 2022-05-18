import styled from "styled-components";

export const Container = styled.div`
  max-width: 92%;
  margin: 5rem auto;
  
  @media(min-width: 768px) {
    width: 50%;
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

  @media(min-width: 768px) {
    margin-top: 10rem;
  }
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
  grid-template-columns: 14fr 1fr 1fr;
  align-items: center;
  height: 100%;
  border-radius: 1rem;
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.secondary};
`;

export const UserInput = styled.input`
  border: 0;
  width: 90%;
  outline: none;
  font-size: 2rem;
  margin-left: 0.3rem;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => 
    props.disabled 
      ? "#495057"
      : props.theme.colors.text};

  & :focus {
    outline: none;
  }
`;