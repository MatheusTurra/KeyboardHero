import styled from 'styled-components';

export const ChronometerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-right: 2rem;

  & span {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text}
  }

  @media(min-width: 1440px) {
    justify-content: flex-end;
    margin-left: -1rem;
  }
`;
