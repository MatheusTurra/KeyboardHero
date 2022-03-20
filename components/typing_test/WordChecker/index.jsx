import { useRef } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;
let textIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const splittedText = text.split();

export default function WordChecker() {
  const userInput = useRef();
  
  function verifyWord(event) {
    updateIndexes(event.code);
  }
  
  function updateIndexes(keycode) {
    if(keycode === "Space") {
      textIndex++;
      wordIndex = 0;
      userInput.current.reset();
      return;
    }

    if(keycode === "Backspace") {
      wordIndex--;
      return;
    }

    wordIndex++;
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
              onKeyUp={event => verifyWord(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}