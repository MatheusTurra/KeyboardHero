import { 
  CurrentWord,
  WordCursor,
  WhiteSpace
 } from "./styles";

import { GameContext } from "../../../providers/GameContext";

import { useContext } from "react";

let showWhitespace = false;

export default function DisplayCurrentWord({word}) {
  const { state } = useContext(GameContext);
  const { currentLetterIndex, isCurrentLetterRight, isGameOver } = state;

  const wordLeftChunk = word.substring(0, currentLetterIndex);
  let wordCursor = word[currentLetterIndex];
  const wordRightChunk = word.substring(currentLetterIndex + 1)
  
  if(wordCursor === undefined) showWhitespace = true;
  else showWhitespace = false;

  return(
    <>
      <CurrentWord isLetterRight={isCurrentLetterRight}>
        <span>{wordLeftChunk}</span>
        <WordCursor
          showCursor={!isGameOver} 
          isLetterRight={isCurrentLetterRight}
        >
          {wordCursor}
        </WordCursor>
        <span>{wordRightChunk}</span>
      </CurrentWord>
      <WhiteSpace 
        isLetterRight={isCurrentLetterRight}
        show={showWhitespace}>
        &nbsp;
      </WhiteSpace>
    </>
  );
}