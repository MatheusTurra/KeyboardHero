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
  const [isWordCorrect, setIsWordCorrect] = useState(false);
  const [startVerification, setStartVerification] = useState(false);

  useEffect(() => {
    verifyLetter();
    handleSpecialKeys();    
  }, [userInput]);

  function verifyLetter() {
    const letterIndex = userInput.length - 1;

    const userInputLetter = userInput.split("")[letterIndex];
    const textLetter = words[wordIndex].split("")[letterIndex]; 

    if(textLetter !== undefined && textLetter === userInputLetter) {
      setIsWordCorrect(true);
    } else {
      setIsWordCorrect(false);
    }
  }

  function handleSpecialKeys() {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      setUserInput("");
      wordIndex++;
    }
  }

  function userInputHandler(event) {
    setStartVerification(true);
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
          spellFeedback={startVerification}
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