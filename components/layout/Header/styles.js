import styled from "styled-components";

export const GradientWrapper = styled.div`
  width: 100%;
  height: 7rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.50);
  background-image: ${props => props.isDarkModeOn
    ? "linear-gradient(to right, #471069, #30c5d2)"
    : "linear-gradient(to right, #f86ca7, #f4d444)"
  };

  @media(min-width: 768px) {
    height: 11rem;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  
  @media(min-width: 768px) {
    height: 10rem;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  flex: 1;
  margin: 0 auto;
  text-align: center;

  @media(min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SwitcherWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
  /* justify-self: flex-end; */
  align-items: center;
  margin-left: auto;
  /* margin: 0 auto; */
  padding: 0 1rem;
  color: ${props => props.theme.colors.text};

  @media(min-width: 768px) {
    font-size: 2rem;
  }

  & .icon {
    display: none;
  }

  & .icon {
    @media(min-width: 768px) {
      display: inline;
    }
  }

`;