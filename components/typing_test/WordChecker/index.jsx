import Timer from "../Timer";
import RenderText from "../RenderText";

import { useEffect, useState } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;
let letterIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const words = text.split(" ");

export default function WordChecker() {
  const [userInput, setUserInput] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(null);

  useEffect(() => {
    if(startGame) verifyLetter();

    handleSpecialKeys();
  }, [userInput]);

  function verifyLetter() {
    const currentWord = words[wordIndex];
    const userInputLength = userInput.length;
    
    const wordChunk = currentWord.substring(0, userInputLength);
    
    console.log(wordChunk === userInput, wordChunk, userInput, startGame);
    if(wordChunk === userInput) {
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
    setUserInput(event.target.value);
  
    setStartGame(true);
  }

  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText
          text={text}
          correct={isWordCorrect}
          currentWord={wordIndex}
        />
        <div className={styles.userInputContainer}>
          <input
            type="text"
            value={userInput}
            onChange={event => userInputHandler(event)}
            className={styles.userInput}
          />
        </div>
        <Timer isGameStarted={startGame}/>
      </section>
    </>
  );
}