import { Container, FooterTitle, SocialMediaLinks } from "./styles";

export default function Footer(){
  return(
    <Container>
      <FooterTitle>
        <h1>Feito por Matheus Farisco turra</h1>
      </FooterTitle>
      <SocialMediaLinks>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/matheus-farisco-turra-6837a6214/">
          Linkedin
        </a>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MatheusTurra/KeyboardHero">
          Github
        </a>
      </SocialMediaLinks>
    </Container>
  );
}