import { useRef } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;
let textIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const splittedText = text.split(" ");

export default function WordChecker() {
  const userInput = useRef();
  
  function verifyWord(event) {
    const keyPressed = event.key;
    const keyPressedCode = event.code;
    const textLetter = splittedText[textIndex][wordIndex];
    
    
    updateIndexes(keyPressedCode);  
  }
  
  function updateIndexes(keyPressed) {
    
    if(keyPressed === "Space") {
      textIndex++;
      wordIndex = 0;
      userInput.current.reset();
      return;
    }

    if(keyPressed === "Backspace") {
      wordIndex--;
      return;
    }

    if(keyPressed.length === 4) {
      wordIndex++;
      return;
    }
  }

  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <textarea
          readOnly
          defaultValue={text}
          className={styles.testText}
        />
        <div className={styles.userInputContainer}>
          <form ref={userInput}>
            <input
              type="text"
              onKeyDown={event => verifyWord(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}