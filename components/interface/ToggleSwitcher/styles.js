import styled, { css } from "styled-components";

export const Container = styled.div`
  & .light {
  }
  `;

export const Switch = styled.div`
  height: 10rem;
  width: 20rem;
  border-radius: 5rem;
  cursor: pointer;
  position: relative;
  border: 1px solid black;
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(aqua, skyblue)"
    : "linear-gradient(midnightBlue, rebeccaPurple)"
  }; 
`;

export const Notch = styled.div`
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  left: 0.2rem;
  z-index: 1;
  transition: all 0.3s ease;
  transform: ${props => props.isDarkModeOn
    && "translate(100px, 0)" 
  };

  background: ${props => props.isDarkModeOn
    ? "yellow"
    : "whitesmoke"
  }; 

  box-shadow: ${props => props.isDarkModeOn
    ? "0 0 0.5rem yellow"
    : "0 0 0.5rem whitesmoke"
  };
`;

export const Background = styled.div`
  & .positionTop {
    top: 2rem;
    left: 5rem;
  }

  & .positionCenter {
    top: 5rem;
    left: 11rem;
  }

  & .positionBottom {
    top: 7rem;
    left: 5rem;
  }

  & .sizeSmall {
    width: 5rem;
    height: 0.5rem;
  }

  & .sizeMedium {
    width: 7rem;
    height: 1rem;
    z-index: 2;
  }

  & .sizeBig {
    width: 10rem;
    height: 1.5rem;
  }
`;

export const StarOrCloud = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;  
`;


