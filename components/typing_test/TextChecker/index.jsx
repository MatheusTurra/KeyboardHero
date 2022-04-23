import RenderText from "../RenderText";

import {
  Container,
  ContainerGradient, 
  GameContainer,
  UserInteractionGradient,
  UserInteractionContainer,
  UserInput
} from "./styles"

const text = ["Teste", "para", "o", "novo", "modo", "do", "jogo"]

export default function WordChecker({isDarkModeOn}) {
  return(
    <>
      <Container>
        <ContainerGradient isDarkModeOn={isDarkModeOn}>
          <GameContainer>
            <RenderText
              text={text}
              letterCorrect={true}
              current={0}
              wordCorrect={false}
              resetFeedback={false}
              isGameOver={false}
            />
          </GameContainer>
        </ContainerGradient>

        <UserInteractionGradient isDarkModeOn={isDarkModeOn}>
          <UserInteractionContainer>
            <UserInput 
              type="text"
              autoFocus={true}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Digite aqui"
            />

            <p>1:00</p>
          </UserInteractionContainer>
        </UserInteractionGradient>            
      </Container>
    </>
  );
}