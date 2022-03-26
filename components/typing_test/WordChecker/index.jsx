import RenderText from "../RenderText";

import { useEffect, useState } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const words = text.split(" ");

export default function WordChecker() {
  const [userInput, setUserInput] = useState("");
  /**
   * TODO: TENTAR REFAZER COM O EFFECT E COLOCAR O CONTEÚDO DO INPUT EM UM ESTADO
   */

  useEffect(() => {
    const letterIndex = userInput.length - 1;

    const userInputLetter = userInput.split("")[letterIndex];
    const textLetter = words[wordIndex].split("")[letterIndex]; 

    handleSpecialKeys();
    
    if(textLetter !== undefined && textLetter === userInputLetter) {
      console.log(textLetter, userInputLetter)
    }
  }, [userInput]);

  function handleSpecialKeys() {
    const detectSpaces = /\s/;
    if(detectSpaces.test(userInput)) {
      setUserInput("");
      wordIndex++;
    }
  }

  function userInputHandler(event) {
    setUserInput(event.target.value);
  }
  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText 
          text={text}
        />
        <div className={styles.userInputContainer}>
          <form>
            <input
              type="text"
              value={userInput}
              onChange={event => userInputHandler(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}