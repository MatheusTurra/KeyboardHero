import { useRef } from "react";

import styles from "./styles.module.css"

const text = "Esse é o primeiro teste para projeto Keyboard Hero";
const splittedText = text.split();

export default function WordChecker() {
  const userInput = useRef();

  function verifyWord(event) {
    const keyPress = event.code;

    if(keyPress === "Space") {
      userInput.current.reset();
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
              onKeyUp={event => verifyWord(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}