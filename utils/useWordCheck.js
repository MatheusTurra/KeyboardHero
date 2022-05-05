import { GameContext } from "../providers/GameContext";

import { useEffect, useContext } from "react";

let currentWord = 0;
let totalWrongKeyPresses = 0;
let totalRightKeyPresses = 0;


export default function useWordCheck(word, userInput) {
  const { state, dispatch } = useContext(GameContext);
  const { isGameStarted } = state;

  useEffect(() => {
    if(word === undefined) return;

    
    const userInputLength = userInput.length;
    const wordChunk = word.substring(0, userInputLength);
    
    setWhenGameStarted(userInputLength, isGameStarted, dispatch);

    if(userInput === "") {
      dispatch({ type: "updateCurrentLetterIsRight", value: null });
    }

    if(wordChunk !== "" && wordChunk === userInput.trim()) {
      dispatch({ type: "updateCurrentLetterIsRight", value: true });
    }
    
    if(wordChunk !== userInput.trim()) {
      dispatch({ type: "updateCurrentLetterIsRight", value: false });
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
}


function setWhenGameStarted(userInputLength, isGameStarted, dispatch) {
  if(isGameStarted === false && userInputLength > 0) {
    currentWord = 0;
    totalRightKeyPresses = 0;
    totalWrongKeyPresses = 0;

    const currentTime =  new Date().getTime();
    dispatch({type: "updateGameIsStarted", value: true});
    dispatch({type: "updateWhenGameStarted", value: currentTime});
  }
}