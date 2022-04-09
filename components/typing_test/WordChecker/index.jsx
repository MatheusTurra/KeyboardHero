import Timer from "../Timer";
import RenderText from "../RenderText";

import { useEffect, useState } from "react";

import styles from "./styles.module.css"
import Result from "../Result";

let wordIndex = 0;
let wordCounter = 0;
let keyPressCounter = 0;
let maxTime = 0;
let incorrectKeyPressCounter = 0;
let correctKeyPressCounter = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const words = text.split(" ");


/**
 *  TODO: TRANSFORMAR ESSE COMPONENTE EM UM HOOK
 */

export default function WordChecker() {
  const [userInput, setUserInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(null);
  const [isLetterCorrect, setIsLetterCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

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
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText
          text={words}
          letterCorrect={isLetterCorrect}
          current={wordIndex}
          wordCorrect={isWordCorrect}
          resetFeedback={resetGame}
          isGameOver={gameOver}
        />

        <div className={styles.userInputContainer}>
          <input
            type="text"
            value={userInput}
            disabled={gameOver}
            onChange={event => userInputHandler(event)}
            className={styles.userInput}
          />
        </div>
        <Timer
          isGameEnded={endGame}
          getMaxTime={getMaxTime}
          getTimeLeft={getTimeLeft}
          isGameStarted={startGame}
          shouldResetTimer={resetGame} 
        />
        <button onClick={restartGame}>Restart</button>

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
      </section>
    </>
  );
}