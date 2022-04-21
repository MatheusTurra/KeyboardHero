import { useState, useEffect } from "react";

let totalWrongWords = 0;
let totalCorrectWords = 0;

let totalKeyPresses = 0;
let totalWrongKeyPresses = 0;
let totalCorrectKeyPresses = 0;

export default function useWordCheck(word, userInput, resetCounters) {
  const [isWordCorrect, setIsWordCorrect] = useState(null);
  const [isLetterCorrect, setIsLetterCorrect] = useState(null);

  useEffect(() => {
    if(word === undefined) return;
    
    const userInputLength = userInput.length;
    const wordChunk = word.substring(0, userInputLength);

    if(userInput === "") setIsLetterCorrect(null);

    if(wordChunk !== "" && wordChunk === userInput.trim()) {
      setIsLetterCorrect(true);
    }

    if(wordChunk !== userInput.trim()) {
      setIsLetterCorrect(false);
    }
  }, [userInput]);

  useEffect(() => {
    const detectSpaces = /\s/;

    if(detectSpaces.test(userInput)) {
      if(userInput.trim() === word) {
        setIsWordCorrect(true);
        totalCorrectKeyPresses += userInput.length - 1;
      } else {
        setIsWordCorrect(false);
        totalWrongKeyPresses += userInput.length - 1;
      }

      totalKeyPresses += userInput.length -1;
    }
  }, [userInput]);

  useEffect(() => {
    setIsWordCorrect(null)
    
    if(isWordCorrect !== null && isWordCorrect) {
      totalCorrectWords++;
    } 
    
    if(isWordCorrect !== null && isWordCorrect === false) {
      totalWrongWords++;
    }
  }, [isWordCorrect]);

  useEffect(() => {
    totalCorrectWords = 0;
    totalWrongWords = 0;
    totalCorrectKeyPresses = 0;
    totalWrongKeyPresses = 0;

    setIsWordCorrect(null);
    setIsLetterCorrect(null);
  }, [resetCounters]);

  return {
    isLetterCorrect,
    isWordCorrect,
    totalKeyPresses,
    totalCorrectWords,
    totalWrongWords,
    totalCorrectKeyPresses,
    totalWrongKeyPresses
  };
}