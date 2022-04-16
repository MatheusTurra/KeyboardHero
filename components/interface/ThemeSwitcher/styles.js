import styled, { css } from "styled-components";
const MOON_COLOR = "#cbcbcb";
const MOON_SHADOW = "#b0d7ff";
const MOON_CRATER_COLOR = "#888888";

const SUN_COLOR = "#ffd900"; 
const SUN_SHADOW = "#fbaf00";

const CLOUD_COLOR = "#fdfdff";
const STAR_COLOR = "#ffffb7"; 
const STAR_SHADOW = "#fff599"

const DAY_SKY_GRADIENT = "#6fe3e1, #5257e5";
const NIGHT_SKY_GRADIENT = "#000328, #00458e"

export const Switch = styled.div`
  height: 3rem;
  width: 6rem;
  border-radius: 5rem;
  cursor: pointer;
  position: relative;
  border: 1px solid black;

  @media(min-width: 768px) {
    height: 4rem;
    width: 9rem;
  }
  
  &:hover {
    box-shadow: ${props => props.isDarkModeOn
      ? "0 0 2rem 0.2rem #00458e"
      : "0 0 2rem 0.2rem #6fe3e1"
    };
  }

  background-image: ${props => props.isDarkModeOn
    ? `linear-gradient(${NIGHT_SKY_GRADIENT})`
    : `linear-gradient(${DAY_SKY_GRADIENT})`
  }; 
`;

export const Notch = styled.div`
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  z-index: 1;
  transition: all 0.3s ease;
  transform: ${props => props.isDarkModeOn
    && "translate(3rem, 0)" 
  };

  background: ${props => props.isDarkModeOn
    ? MOON_COLOR
    : SUN_COLOR
  }; 

  box-shadow: ${props => props.isDarkModeOn
    ? `0 0 1rem ${MOON_SHADOW}`
    : `0 0 1rem ${SUN_SHADOW}`
  };

  @media(min-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
    top: 0.2rem;
    left: 0.3rem;

    transform: ${props => props.isDarkModeOn
      && "translate(5rem, 0)" 
    };
  }

  & .moonCraterMedium {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: absolute;
    background-color: burlywood;
    box-shadow: 0 5px 5px rgba(0,0,0,0.4) inset;
    top: 6rem;
    left: 5rem;
    opacity: 0.4;
  }
`;


export const MoonCraterSmall = styled.span`
  ${props => props.isDarkModeOn 
    && css`
      height: 0.32rem;
      width: 2rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 0.7rem;
      left: 0.9rem;
      opacity: 0.3;
      transform: rotate(45deg);
    `
  }

  @media(min-width: 768px) {
    ${props => props.isDarkModeOn 
    && css`
      height: 0.32rem;
      width: 2rem;
      top: 0.7rem;
      left: 1rem;
    `}
  }
`

export const MoonCraterMedium = styled.span`
  ${props => props.isDarkModeOn 
    && css`
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 0.5rem;
      left: 0.3rem;
      opacity: 0.3;
    `
  }

  @media(min-width: 768px) {
    ${props => props.isDarkModeOn 
    && css`
      height: 1rem;
      width: 1rem;
      top: 1.3rem;
      left: 0.1rem;
    `}
  }
`;

export const MoonCraterBig = styled.span`
  ${props => props.isDarkModeOn 
    && css`
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 1.6rem;
      left: 1.3rem;
      opacity: 0.3;
    `
  }

  @media(min-width: 768px) {
    ${props => props.isDarkModeOn 
    && css`
      height: 1rem;
      width: 1rem;
      top: 2rem;
      left: 2.2rem;
    `}
  }
`;

export const SkyBackground = styled.div`
  & .cloudSmall {
    width: 1.6rem;
    height: 0.1rem;
    top: 1.8rem;
    left: 3rem;

    @media(min-width: 768px) {
      width: 3rem;
      height: 0.3rem;
      top: 1.8rem;
      left: 3rem;
    }
  }

  & .cloudMedium {
    top: 0.3rem;
    left: 1.3rem;
    width: 2.6rem;
    height: 0.2rem;
    z-index: 2;


    @media(min-width: 768px) {   
      top: 0.5rem;
      left: 2rem;
      width: 2.6rem;
      height: 0.3rem;
    }
  }

  & .cloudBig {
    top: 1rem;
    left: 3.2rem;
    width: 2.7rem;
    height: 0.3rem;

    @media(min-width: 768px) {
      top: 2.8rem;
      left: 4.3rem;
      width: 3.7rem;
      height: 0.4rem;
    }
  }

  & .extraCloud {
    width: 2rem;
    height: 0.2rem;
    top: 2.4rem;
    left: 3.4rem;

    @media(min-width: 768px) {
      width: 2rem;
      height: 0.2rem;
      top: 1.3rem;
      left: 6.1rem;
    }
  }

  & .starSmall {
    top: -0.2rem;
    left: 3.7rem;
    height: 0.3rem;
    width: 0.3rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-3rem, 0.5rem);

    @media(min-width: 768px) {
      top: 2.5rem;
      left: 7.2rem;
      height: 0.3rem;
      width: 0.3rem;
    }
  }

  & .starMedium {
    top: -0.4rem;
    left: 3.9rem;
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-1em, 1rem);
  
  
    @media(min-width: 768px) {
      top: -0.4rem;
      left: 4.5rem;
      height: 0.5rem;
      width: 0.5rem;
    }
  } 

  & .starBig {
    top: 2rem;
    left: 2.8rem;
    height: 0.6rem;
    width: 0.6rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-1rem, 0rem);

    @media(min-width: 768px) {
      top: 2rem;
      left: 3.7rem;
      height: 0.6rem;
      width: 0.6rem;
    }
  }

  & .extraStar {
    top: 1.2rem;
    left: 2.7rem;
    width: 0.6rem;
    height: 0.6rem;
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    background-color: ${STAR_COLOR};
    transform: translate(-2rem, 0rem);

    @media(min-width: 768px) {
      top: 1.5rem;
      left: 3rem;
      width: 0.6rem;
      height: 0.6rem;
    }
  }
`;

export const StarOrCloud = styled.span`
  position: absolute;
  background: ${CLOUD_COLOR};
  border-radius: 50%;
  transition: all 0.3s ease;
`;


