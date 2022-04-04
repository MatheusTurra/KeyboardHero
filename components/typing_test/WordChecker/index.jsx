import Timer from "../Timer";
import RenderText from "../RenderText";

import { useEffect, useState } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const words = text.split(" ");

/**
 *  TODO: FEEDBACK DA PALAVRA INTEIRA
 */

export default function WordChecker() {
  const [userInput, setUserInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(null);
  const [isLetterCorrect, setIsLetterCorrect] = useState(null);

  useEffect(() => {
    if(startGame) {
      verifyLetter();
      verifyWord();
    } 

    handleSpecialKeys();
  }, [userInput]);

  function verifyWord() {
    const currentWord = words[wordIndex];
    
    if(userInput === currentWord) {
      setIsWordCorrect(true);
    } else {
      setIsWordCorrect(false);
    }
  }

  function verifyLetter() {
    const currentWord = words[wordIndex];
    const userInputLength = userInput.length;
    
    const wordChunk = currentWord.substring(0, userInputLength);
    
    if(wordChunk !== "" && wordChunk === userInput) {
      setIsLetterCorrect(true);
    }

    if(wordChunk !== userInput) {
      setIsLetterCorrect(false);
    }
  }

  function handleSpecialKeys() {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      setIsLetterCorrect(null);
      setUserInput("");
      wordIndex++;
    }
  }

  function userInputHandler(event) {
    setStartGame(true);
    setResetGame(false);
    setUserInput(event.target.value);
  }

  function restartGame() {
    wordIndex = 0;

    setUserInput("");
    setGameOver(false);    
    setStartGame(false);
    setResetGame(true);
    setIsLetterCorrect(null);
  }

  function endGame() {
    setGameOver(true);
  }

  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText
          text={words}
          correct={isLetterCorrect}
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
          isGameStarted={startGame}
          shouldResetTimer={resetGame} 
        />
        <button onClick={restartGame}>Restart</button>
      </section>
    </>
  );
}