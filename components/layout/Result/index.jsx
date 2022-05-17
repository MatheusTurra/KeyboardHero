import { GameContext } from "../../../providers/GameContext";
import { useCalcAccuracy, useCalcWpm } from "../../../utils/useCalcWpm";

import { useContext } from "react";

import {
  Wrapper,
  ResultContainer,
  Label,
  Value
} from "./styles";

export default function Result() {
  const { state } = useContext(GameContext);

  const wpm = useCalcWpm();
  const accuracy = useCalcAccuracy();

  return(
    <ResultContainer showResults={state.isGameOver}>
      <Wrapper>
        <Label>Palavras por minuto: </Label>
        <Value>{wpm}</Value>
      </Wrapper>

      <Wrapper>
        <Label>Precisão: </Label>
        <Value>{accuracy}</Value>
      </Wrapper>
    </ResultContainer>
  );
}