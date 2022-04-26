import DisplayWord from "../DisplayWord";
import ResultFeedback from "../ResultFeedback";

import { TextContainer } from "./styles";

import { memo } from "react";

function RenderLetters({ text }) {
  return(
    <> 
      <TextContainer> 
        {text.map((word, index) => {
          return (
            <ResultFeedback key={index}>
              <DisplayWord word={word} textIndex={index}/>
            </ResultFeedback>
          );
        })}
      </TextContainer>
    </>
  );
}

export default memo(RenderLetters);