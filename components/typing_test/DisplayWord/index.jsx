import { 
  GameWord
 } from "./styles";

export default function DisplayWord({word}) {
  return(
    <>
      <GameWord>{word}</GameWord>
    </>    
  );
}