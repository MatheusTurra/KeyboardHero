import { 
  GameWord,
  CurrentWord,
  WordCursor,
  WhiteSpace,
 } from "./styles";

import { GameContext } from "../../../providers/GameContext";

import { useContext } from "react";

let showWhitespace = false;

export default function DisplayWord({word, textIndex}) {
  const { state } = useContext(GameContext);
  const { currentLetterIndex, currentWord, isCurrentLetterRight }  = state;

  const isWordActive = textIndex === currentWord;

  if(isWordActive) {
    const wordLeftChunk = word.substring(0, currentLetterIndex);
    let wordCursor = word[currentLetterIndex];
    const wordRightChunk = word.substring(currentLetterIndex + 1)
    
    if(wordCursor === undefined) showWhitespace = true;
    else showWhitespace = false;

    return(
      <>
        <CurrentWord isLetterRight={isCurrentLetterRight}>
          <span>{wordLeftChunk}</span>
          <WordCursor isLetterRight={isCurrentLetterRight}>{wordCursor}</WordCursor>
          <span>{wordRightChunk}</span>
        </CurrentWord>
        <WhiteSpace 
          isLetterRight={isCurrentLetterRight}
          show={showWhitespace}>&nbsp;
        </WhiteSpace>
      </>
    );
  }

  return(
    <>
      <GameWord>
        {word}
        <WhiteSpace>&nbsp;</WhiteSpace>
      </GameWord>
    </>    
  );
}