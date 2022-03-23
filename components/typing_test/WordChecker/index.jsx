import { useRef } from "react";

import styles from "./styles.module.css"

let wordIndex = 0;
let textIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const splittedText = text.split(" ");

export default function WordChecker() {
  
  function teste(event){
    const textLetters = splittedText[0].split("");
    const userInputData = event.nativeEvent.data;
    const userEntry = event.target.value;
    const userTextIndex = userEntry.length - 1;

    console.log(textLetters[textIndex] === userEntry[userTextIndex], textLetters[textIndex], userEntry[userTextIndex], textIndex, userTextIndex);
    console.log(userInputData);
    if(textLetters[textIndex] === userEntry[userTextIndex]) {
      console.log('certim');
      textIndex++;
    }

    if(userInputData === null && textIndex >= userTextIndex) {
      if(textIndex > 0) textIndex--;
      console.log('apaga')
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
              onChange={event => teste(event)}
              className={styles.userInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}