import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 65%;
  height: 4rem;
  cursor: pointer;
  font-size: 2.8rem;
  font-weight: 600;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 0;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};

  & :after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    border: 0;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    box-shadow: ${props => props.isDarkModeOn
      ? "0 0 1rem 3rem #30c5d2"
      : "0 0 1rem 3rem #f86ca7"};
  }

  & :active:after {
    box-shadow: ${props => props.isDarkModeOn
      ? "0 0 0 0 #30c5d2"
      : "0 0 0 0 #f86ca7"};

    position: absolute;
    border: 0;
    border-radius: 1rem;
    left: 0;
    top:0;
    opacity: 1;
    transition: 0s;
  }

  & :active {
    top: 1px;
  } 


  & :hover {
    box-shadow: 0.7rem 0.5rem 1rem #000;

    background-image: ${props => props.isDarkModeOn
      ? "linear-gradient(to right, #471069, #30c5d2)"
      : "linear-gradient(to right, #f86ca7, #f4d444)"
    };
  }
`;