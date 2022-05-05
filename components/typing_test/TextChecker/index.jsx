import RenderWords from "../RenderWords";
import Chronometer from "../Chronometer";
import ResetButton from "../../interface/ResetButton";
import useWordCheck from "../../../utils/useWordCheck";

import { GameContext } from "../../../providers/GameContext";

import { useContext, useEffect, useState } from "react";

import {
  Container,
  ContainerGradient, 
  GameContainer,
  UserInteractionGradient,
  UserInteractionContainer,
  UserInput
} from "./styles"

const text = "Maurício de Sousa, analista do jornal Folha da Manhã criou e, ingressou na área dos quadrinhos no ano de 1959 com seus primeiros personagens, Bidu e Franjinha. Ambos foram baseados na própria infância de Maurício, sendo Bidu inspirado no seu cãozinho de estimação, Cuíca. No ano seguinte, os personagens ganharam espaço através da revista infantil Zaz Traz, pela Editora Outubro. Posteriormente um gibi intitulado 'Bidu' foi lançado pela Editora Continental, sendo cancelado no mesmo ano com apenas 8 revistas sendo lançadas. Ainda naquele tempo novos personagens foram criados, entre eles o que mais chamou atenção foi Cebolinha como coadjuvante de Franjinha.".split(" ");

export default function TextChecker({isDarkModeOn}) {
  const [userInput, setUserInput] = useState("");
  const [startGame, setStartGame] = useState(false); 

  const { state } = useContext(GameContext);
  const { currentWord, isGameStarted } = state;
  
  useWordCheck(text[currentWord], userInput);

  useEffect(() => {
    if(isGameStarted === false) {
      setUserInput("");
    }
  }, [isGameStarted]);

  useEffect(() => {
    const detectSpaces = /\s/;

    if(detectSpaces.test(userInput)) {
      setUserInput("");
    }
  }, [userInput]);
  
  function handleUserInputChange(event) {
    const inputValue = event.target.value;
    setStartGame(true);
    setUserInput(inputValue);
  }

  return(
    <>
      <Container>
        <ContainerGradient isDarkModeOn={isDarkModeOn}>
          <GameContainer>
            <RenderWords 
              text={text}
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
              value={userInput}
              onChange={event => handleUserInputChange(event)}
            />
            <Chronometer />
            <ResetButton />
          </UserInteractionContainer>
        </UserInteractionGradient>            
      </Container>
    </>
  );
}