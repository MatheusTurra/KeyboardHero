import styled from "styled-components";

export const GradientWrapper = styled.div`
  width: 100%;
  height: 11rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 10rem;
  background: ${props => props.theme.colors.primary};
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 3fr);
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  grid-column-start: 2;
`;

export const SwitcherWrapper = styled.div`
  justify-self: end;
`;