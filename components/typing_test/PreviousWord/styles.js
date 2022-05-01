import styled, { keyframes } from 'styled-components';

const slideWpmDown = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1.8);
    opacity: 1;
  }

  30% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  } */

  100% {
    transform: scale(0.8) translate3d(0, 0.5rem, 0);
    opacity: 0;
  } 
`;

export const WpmFeedback = styled.span`
  z-index: 0;
  font-size: 1.6rem;
  font-weight: 700;
  width: 80%;
  height: 50%;
  white-space: pre;
  display: inline-block;
  text-align: center;
  position: absolute;
  left: 0rem;
  opacity: 0;
  animation: ${slideWpmDown} 500ms ease-out;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
`;

export const RightWord = styled.span`
  color: limegreen;
  white-space: pre;
  z-index: 10;
  position: relative;
`;

export const  WrongWord = styled.span`
  z-index: 0;
  position: relative;
  color: coral;
  white-space: pre;
  text-decoration: line-through;
  text-decoration-color: crimson;
  text-decoration-thickness: 0.25rem;
`;

export const WhiteSpace = styled.span`
  background-color: ${props => props.theme.colors.secondary};
`;
