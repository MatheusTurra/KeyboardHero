import Timer from "../Timer";
import RenderText from "../RenderText";

import { useEffect, useState } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const words = text.split(" ");

export default function WordChecker() {
  const [userInput, setUserInput] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(null);

  useEffect(() => {
    if(startGame) verifyLetter();
    handleSpecialKeys();
  }, [userInput]);

  function verifyLetter() {
    const currentWord = words[wordIndex];
    const userInputLength = userInput.length;
    
    const wordChunk = currentWord.substring(0, userInputLength);
    
    if(wordChunk !== "" && wordChunk === userInput) {
      setIsWordCorrect(true);
    }

    if(wordChunk !== userInput) {
      setIsWordCorrect(false);
    }
  }

  function handleSpecialKeys() {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      setIsWordCorrect(null);
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
    setIsWordCorrect(null);
  }

  function endGame() {
    setGameOver(true);
  }

  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText
          text={text}
          correct={isWordCorrect}
          currentWord={wordIndex}
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
          shouldresetGame={resetGame} 
        />
        <button onClick={restartGame}>Restart</button>
      </section>
    </>
  );
}