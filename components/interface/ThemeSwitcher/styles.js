import styled, { css } from "styled-components";

const MOON_COLOR = "#ffffb7";
const MOON_SHADOW = "#fff599";
const MOON_CRATER_COLOR = "#ffe747";

const SUN_COLOR = "#ffd900"; 
const SUN_SHADOW = "#fbaf00";

const CLOUD_COLOR = "#fdfdff";
const STAR_COLOR = "#e2e2e2";
const STAR_SHADOW = "#b0d7ff"

const DAY_SKY_GRADIENT = "#6fe3e1, #5257e5";
const NIGHT_SKY_GRADIENT = "#000328, #00458e"

export const Switch = styled.div`
  height: 4rem;
  width: 9rem;
  border-radius: 5rem;
  cursor: pointer;
  position: relative;
  border: 1px solid black;
  
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
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
  z-index: 1;
  transition: all 0.3s ease;
  transform: ${props => props.isDarkModeOn
    && "translate(10.6rem, 0)" 
  };

  background: ${props => props.isDarkModeOn
    ? MOON_COLOR
    : SUN_COLOR
  }; 

  box-shadow: ${props => props.isDarkModeOn
    ? `0 0 1rem ${MOON_SHADOW}`
    : `0 0 1rem ${SUN_SHADOW}`
  };


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
      height: 1.12rem;
      width: 4rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 2rem;
      left: 1rem;
      opacity: 0.3;
      transform: rotate(45deg);
    `
  }
`

export const MoonCraterMedium = styled.span`
  ${props => props.isDarkModeOn 
    && css`
      height: 2em;
      width: 2rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 6.8rem;
      left: 3rem;
      opacity: 0.3;
    `
  }
`;

export const MoonCraterBig = styled.span`
  ${props => props.isDarkModeOn 
    && css`
      height: 4em;
      width: 4rem;
      border-radius: 50%;
      position: absolute;
      background-color: ${MOON_CRATER_COLOR};
      top: 2.9rem;
      left: 4.9rem;
      opacity: 0.3;
    `
  }
`;

export const SkyBackground = styled.div`
  & .cloudSmall {
    width: 3rem;
    height: 0.3rem;
    top: 1.8rem;
    left: 3rem;
  }

  & .cloudMedium {
    top: 0.5rem;
    left: 2rem;
    width: 2.6rem;
    height: 0.3rem;
    z-index: 2;
  }

  & .cloudBig {
    top: 2.8rem;
    left: 4.3rem;
    width: 3.7rem;
    height: 0.4rem;
  }

  & .extraCloud {
    width: 2rem;
    height: 0.2rem;
    top: 1.3rem;
    left: 6.1rem;
  }

  & .starSmall {
    height: 0.9rem;
    width: 0.9rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-3rem, 0.5rem);
  }

  & .starMedium {
    height: 1.2rem;
    width: 1.2rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-1em, 1rem);
  }

  & .starBig {
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${STAR_COLOR};
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    transform: translate(-1rem, 0rem);
  }

  & .extraStar {
    top: 1rem;
    left: 10rem;
    width: 1.8rem;
    height: 1.8rem;
    box-shadow: 0 0 1rem 0.2rem ${STAR_SHADOW};
    background-color: ${STAR_COLOR};
    transform: translate(-2rem, 0rem);
  }
  `;

export const StarOrCloud = styled.span`
  position: absolute;
  background: ${CLOUD_COLOR};
  border-radius: 50%;
  transition: all 0.3s ease;
`;


