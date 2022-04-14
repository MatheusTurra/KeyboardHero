import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 65%;
  height: 4rem;
  cursor: pointer;
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};

  & :hover {
    box-shadow: 0.7rem 0.5rem 1rem #000;

    background-image: ${props => props.isDarkModeOn
      ? "linear-gradient(to right, #471069, #30c5d2)"
      : "linear-gradient(to right, #f86ca7, #f4d444)"
    };
  }
`;