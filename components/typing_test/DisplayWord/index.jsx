import { 
  GameWord,
  CurrentWord,
  WordCursor
 } from "./styles";

import { GameContext } from "../../../providers/GameContext";

import { useContext } from "react";


export default function DisplayWord({word, textIndex}) {
  const { state } = useContext(GameContext);
  const { currentLetterIndex, currentWord }  = state;

  const isWordActive = textIndex === currentWord;
  if(isWordActive) {
    const wordLeftChunk = word.substring(0, currentLetterIndex);
    const wordCursor = word[currentLetterIndex];
    const wordRightChunk = word.substring(currentLetterIndex + 1)
    return(
      <CurrentWord>
        <span>{wordLeftChunk}</span>
        <WordCursor>{wordCursor}</WordCursor>
        <span>{wordRightChunk}</span>
      </CurrentWord>
    );
  }

  return(
    <>
      <GameWord>{word}</GameWord>
    </>    
  );
}