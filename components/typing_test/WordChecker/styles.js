import styled from "styled-components";

export const Container = styled.div`
  width: 92%;
  margin: 0 auto;
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
  display: grid;
  grid-gap: 2rem;
  /* grid-template-rows: 3fr 1fr; */
  border-radius: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

export const UserContainerGradient = styled.div`
  padding: 0.3rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 1rem rgba(0,30,84, 0.50);
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const UserInteractionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; 
  padding: 1rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.secondary};
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