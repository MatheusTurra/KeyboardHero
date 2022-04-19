import Timer from "../Timer";
import Result from "../Result";
import RenderText from "../RenderText";
import ResetButton from "../../interface/ResetButton";

import { generateWords } from "../../../utils/words";

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
let wordCounter = 0;
let keyPressCounter = 0;
let maxTime = 0;
let incorrectKeyPressCounter = 0;
let correctKeyPressCounter = 0;
// let words = generateWords(340);


/**
 *  TODO: TRANSFORMAR ESSE COMPONENTE EM UM HOOK
 */

export default function WordChecker({isDarkModeOn}) {
  const [words, setWords] = useState([""]);
  const [userInput, setUserInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(null);
  const [isLetterCorrect, setIsLetterCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setWords(generateWords(340));
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const userInputLength = userInput.length;
    const wordChunk = currentWord.substring(0, userInputLength);


    if(wordChunk !== "" && wordChunk === userInput.trim()) {
      setIsLetterCorrect(true);
    }

    if(wordChunk !== userInput.trim()) {
      setIsLetterCorrect(false);
    }
  }, [userInput]);

  useEffect(() => {
    const detectSpaces = /\s/;
    const currentWord = words[wordIndex];

    if(detectSpaces.test(userInput)) {
      if(userInput.trim()  === currentWord) {
        setIsWordCorrect(true);
        correctKeyPressCounter += currentWord.length;
      } else {
        setIsWordCorrect(false);
        incorrectKeyPressCounter += currentWord.length;
      }
    }
  });


  useEffect(() => {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      if(isWordCorrect) wordCounter++;
      
      wordIndex++;
      correctKeyPressCounter += 1;
      setIsLetterCorrect(null);
      setUserInput("");
    }
  }, [userInput]);

  function userInputHandler(event) {
    keyPressCounter++;

    setStartGame(true);
    setResetGame(false);
    setUserInput(event.target.value);
  }

  function restartGame() {
    wordIndex = 0;
    wordCounter = 0;
    keyPressCounter = 0;
    correctKeyPressCounter = 0;
    incorrectKeyPressCounter = 0;

    setWords( generateWords(340));
    setUserInput("");
    setGameOver(false);    
    setStartGame(false);
    setResetGame(true);
    setIsLetterCorrect(null);
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
              words={wordCounter}
              keyPresses={keyPressCounter}
              correctKeyPresses={correctKeyPressCounter}
              incorrectKeyPresses={incorrectKeyPressCounter}
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