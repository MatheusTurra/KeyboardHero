import styled, { css, keyframes } from 'styled-components';

const popin = keyframes`
  0% {
    transform: scale(1.5) translate3d(0, -2rem, 0);
    opacity: 0.75;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const popinAnimation = css`
  animation: ${popin} 1500ms cubic-bezier(0, 1, 0.5, 1);
`;

const fadeoutAnimation = css`
  animation: ${fadeout} 1500ms linear;
`;

export const ResultContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  opacity ${props => props.showResults ? 1 : 0};
  ${props => props.showResults ? popinAnimation : fadeoutAnimation};

  @media(min-width: 768px) and (max-width: 995px) {
    padding-top: 1rem;
    font-size: 1.3rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem; 
  font-size: 1.8rem;
  font-family: "JetBrains Mono", monospace;
  display: ${props => props.showResults === false && "none"};
`;

export const Label = styled.span`
  font-size: 1.6rem;
  `;

export const Value = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;