import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 9rem;
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
  margin: 0 3rem;
`;