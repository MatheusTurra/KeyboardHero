import styled from 'styled-components';

export const ChronometerContainer = styled.div`
  padding: 0 1rem;

  & span {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text}
  }
`;
