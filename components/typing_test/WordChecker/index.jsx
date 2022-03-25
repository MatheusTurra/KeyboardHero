import RenderText from "../RenderText";

import { useRef, useState } from "react";

import styles from "./styles.module.css"

let textLetterIndex = 0;

const text = "Esse é o primeiro teste para o projeto Keyboard Hero";
const splittedText = text.split(" ");

export default function WordChecker() {
  const userInputRef = useRef();
  const [textIndex, setTextIndex] = useState(0);

  function verifyLetters(event){
    const inputData = event.nativeEvent.data;
    const textLetters = splittedText[textIndex].split("");
    const userInputValue = event.target.value;
    const userInputIndex = userInputValue.length - 1;

    if(
      textLetterIndex < splittedText[textIndex].length -1 &&
      textLetters[textLetterIndex] === userInputValue[userInputIndex]
    ){
      textLetterIndex++;
    }

    if(inputData === " "){
      incrementTextIndex();
      textLetterIndex = 0;
      userInputRef.current.reset();
    }
    if(inputData === null && textLetterIndex >= userInputIndex) {
      if(textLetterIndex > 0) {
        textLetterIndex--;
      }
    }
  }

  function incrementTextIndex() {
    setTextIndex(prevState => {
      return prevState + 1;
    });
  } 
  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <RenderText 
          text={text}
          textIndex={textIndex}
        />
        <div className={styles.userInputContainer}>
          <form ref={userInputRef}>
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