import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitle = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

export const SocialMediaLinks = styled.div`
  font-size: 1.4rem;
  margin-top: 1rem;

  & a{
    padding: 0.7rem;
    margin: 0 1.2rem;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  & a:hover {
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.link};
    box-shadow: 0 0 2rem 0.2rem ${props => props.theme.colors.link};
  }
`;
