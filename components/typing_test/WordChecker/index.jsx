import Timer from "../Timer";
import Result from "../Result";
import RenderText from "../RenderText";
import ResetButton from "../../interface/ResetButton";

import { generateWords } from "../../../utils/randomWords";
import useWordCheck from "../../../utils/useWordCheck";

import { useEffect, useState } from "react";


import {
  Container,
  ContainerGradient,
  GameContainer,
  UserContainerGradient,
  UserInteractionWrapper,
  UserInput
} from "./styles";


let wordIndex = 0;
let maxTime = 0;

export default function WordChecker({isDarkModeOn}) {
  const [words, setWords] = useState([""]);
  const [userInput, setUserInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const {
    isLetterCorrect,
    isWordCorrect,
    totalKeyPresses,
    totalCorrectKeyPresses,
    totalWrongKeyPresses
  } = useWordCheck(words[wordIndex], userInput, resetGame);
  
  useEffect(() => {
    setWords(generateWords());
  }, []);


  useEffect(() => {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      wordIndex++;
      setUserInput("");
    }
  }, [userInput]);

  function userInputHandler(event) {
    setStartGame(true);
    setResetGame(false);
    setUserInput(event.target.value);
  }

  function restartGame() {
    wordIndex = 0;

    setWords(generateWords());
    setUserInput("");
    setGameOver(false);    
    setStartGame(false);
    setResetGame(true);
  }

  function endGame() {
    setGameOver(true);
  }

  function getMaxTime(time) {
    maxTime = time
  }

  function getTimeLeft(seconds) {
    setTimeLeft(seconds);
  }

  return(
    <>
      <Container isDarkModeOn={isDarkModeOn}>
        <GameContainer>
          <ContainerGradient isDarkModeOn={isDarkModeOn}>
            <RenderText
              text={words}
              letterCorrect={isLetterCorrect}
              current={wordIndex}
              wordCorrect={isWordCorrect}
              resetFeedback={resetGame}
              isGameOver={gameOver}
            />
          </ContainerGradient>
          
          <UserContainerGradient isDarkModeOn={isDarkModeOn}>
          <UserInteractionWrapper>
            <UserInput
              type="text"
              value={userInput}
              disabled={gameOver}
              autoFocus={true}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Digite aqui"
              onChange={event => userInputHandler(event)}
            />

            <Result
              maxTime={maxTime}
              start={startGame}
              timeLeft={timeLeft}
              keyPresses={totalKeyPresses}
              correctKeyPresses={totalCorrectKeyPresses}
              incorrectKeyPresses={totalWrongKeyPresses}
              isGameReseted={resetGame}
            />

            <Timer
              isGameEnded={endGame}
              getMaxTime={getMaxTime}
              getTimeLeft={getTimeLeft}
              isGameStarted={startGame}
              resetTimer={resetGame} 
            />
            <ResetButton isDarkModeOn={isDarkModeOn} onClick={restartGame}/>
          </UserInteractionWrapper>
          </UserContainerGradient>
        </GameContainer>
      </Container>
    </>
  );
}