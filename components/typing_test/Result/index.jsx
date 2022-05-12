import { GameContext } from "../../../providers/GameContext";
import { useCalcAccuracy, useCalcWpm } from "../../../utils/useCalcWpm";

import { useContext } from "react";

import {
  Wrapper,
  ResultContainer
} from "./styles";

export default function Result() {
  const { state } = useContext(GameContext);

  const wpm = useCalcWpm();
  const accuracy = useCalcAccuracy();

  return(
    <>
      <ResultContainer>
        <Wrapper showResults={state.isGameOver}>
          <span>Precisão: {accuracy}</span>
          <span>Palavras por Minuto: {wpm}</span>
        </Wrapper>
      </ResultContainer>
    </>
  );
}