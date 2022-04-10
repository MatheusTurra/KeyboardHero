import styled from "styled-components"

export const Switch = styled.div`
  height: 10rem;
  width: 20rem;
  border-radius: 5rem;
  border: 1px solid black;
  position: relative;
  background-image: linear-gradient(aqua, skyblue); 
`;


export const Notch = styled.div`
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 0.5rem;
  left: 0.2rem;
  z-index: 1;
`;

export const SkyContainer = styled.div`
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


