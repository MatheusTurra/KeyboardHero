import { useRef } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;
let letterIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const splittedText = text.split(" ");

export default function WordChecker() {
  
  function verifyLetters(event){
    const textLetters = splittedText[0].split("");
    const inputData = event.nativeEvent.data;
    const userInputValue = event.target.value;
    const userInputIndex = userInputValue.length - 1;

    if(textLetters[letterIndex] === userInputValue[userInputIndex]) {
      letterIndex++;
    }

    if(inputData === null && letterIndex >= userInputIndex) {
      if(letterIndex > 0) {
        letterIndex--;
      }
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
          <form>
            <input
              type="text"
              onChange={event => verifyLetters(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}