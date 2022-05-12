import styled from 'styled-components';


export const ResultContainer = styled.div`
  width: 100%;
  height: 5rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.secondary};

  @media(min-width: 768px) and (max-width: 995px) {
    padding-top: 1rem;
    font-size: 1.3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & span {
    margin: 0 auto;
    display: ${props => props.showResults === false && "none"};
  }
`;