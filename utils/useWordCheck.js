import { useState, useEffect } from "react";

let totalWrongWords = 0;
let totalCorrectWords = 0;

let currentWord = 0;
let totalWrongKeyPresses = 0;
let totalRightKeyPresses = 0;


export default function useWordCheck(word, userInput, resetCounters, gameContext) {
  const [isWordCorrect, setIsWordCorrect] = useState(null);
  const [isLetterCorrect, setIsLetterCorrect] = useState(null);
  const { dispatch } = gameContext;
  
  useEffect(() => {
    if(word === undefined) return;
    
    const userInputLength = userInput.length;
    const wordChunk = word.substring(0, userInputLength);

    if(userInput === "") setIsLetterCorrect(null);

    if(wordChunk !== "" && wordChunk === userInput.trim()) {
    }
    
    if(wordChunk !== userInput.trim()) {
    }
    
    dispatch({ type: "updateLetterIndex", value: userInputLength });
  }, [userInput]);

  useEffect(() => {
    const detectSpaces = /\s/;

    if(detectSpaces.test(userInput)) {
      if(userInput.trim() === word) {
        totalRightKeyPresses += userInput.length -1;
        
        dispatch({ type: "updateCurrentWordIsRight", value: true});
        dispatch({ type: "updateTotalRightKeyPresses", value: totalRightKeyPresses});
      } else {
        totalWrongKeyPresses += userInput.length -1;
        
        dispatch({ type: "updateCurrentWordIsRight", value: false});
        dispatch({ type: "updateTotalWrongKeyPresses", value: totalWrongKeyPresses});
      }
      
      
      currentWord++;
      dispatch({type: "updateCurrentWord", value: currentWord})
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
    totalRightKeyPresses = 0;
    totalWrongKeyPresses = 0;

    setIsWordCorrect(null);
    setIsLetterCorrect(null);
  }, [resetCounters]);

  return {
    isLetterCorrect,
    isWordCorrect,
    totalCorrectWords,
    totalWrongWords,
    totalRightKeypresses: totalRightKeyPresses,
    totalWrongKeyPresses,
  };
}