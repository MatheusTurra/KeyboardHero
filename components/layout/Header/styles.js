import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 6rem;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;