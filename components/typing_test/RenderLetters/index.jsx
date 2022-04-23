import { TextContainer } from "./styles";

import DisplayWord from "../DisplayWord";
import ResultFeedback from "../ResultFeedback";


export default function RenderLetters({text, currentWordIndex}) {
  return(
    <> 
      <TextContainer> 
        {text.map((word, index) => {
          return (
            <ResultFeedback key={index}>
              <DisplayWord word={word}/>
            </ResultFeedback>
          );
        })}
      </TextContainer>
    </>
  );
}