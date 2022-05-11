import Timer from "../Timer";
import RenderWords from "../RenderWords";
import ResetButton from "../../interface/ResetButton";
import useWordCheck from "../../../utils/useWordCheck";
import { GameContext } from "../../../providers/GameContext";
import { generateWords } from "../../../utils/generateWords";

import { useContext, useEffect, useState } from "react";


import {
  Container,
  ContainerGradient,
  GameContainer,
  UserContainerGradient,
  UserInteractionWrapper,
  UserInput
} from "./styles";

/**
 * TODO: RESPONSIVIDADE NO FIREFOX
 */

export default function WordChecker({isDarkModeOn}) {
  const [userInput, setUserInput] = useState("");
  const [gameWords, setGameWords] = useState([""]);

  const { state } = useContext(GameContext);
  const { isGameStarted } = state;

  useWordCheck(gameWords, userInput);

  useEffect(() => {
    if(isGameStarted === false) {
      const randomWords = generateWords();

      setUserInput("");
      setGameWords(randomWords);
    }
  }, [isGameStarted]);

  function userInputHandler(event) {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
  }

  function detectSpacesHandler(event) {
    const keyPressed = event.code;
    
    if(keyPressed === "Space") {
      setUserInput("");
    }
  }

  return(
    <>
      <Container isDarkModeOn={isDarkModeOn}>
        <GameContainer>
          <ContainerGradient isDarkModeOn={isDarkModeOn}>
            <RenderWords text={gameWords} />
          </ContainerGradient>
          
          <UserContainerGradient isDarkModeOn={isDarkModeOn}>
          <UserInteractionWrapper>
            <UserInput
              type="text"
              value={userInput}
              autoFocus={true}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Digite aqui"
              onChange={event => userInputHandler(event)}
              onKeyUp={event => detectSpacesHandler(event)}

            />
            <Timer />
            <ResetButton isDarkModeOn={isDarkModeOn} />
          </UserInteractionWrapper>
          </UserContainerGradient>
        </GameContainer>
      </Container>
    </>
  );
}