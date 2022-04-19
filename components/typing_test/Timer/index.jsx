import { useEffect } from "react";
import useTimeCountdown from "../../../utils/useTimeCountdown";

import {
  TimerContainer
} from "./styles";

export default function Timer({isGameStarted, resetTimer, getMaxTime, isGameEnded}) {
  const {
    minutes,
    seconds,
    countdownHasEnded,
    resetCountdown,
  } = useTimeCountdown(isGameStarted, 1);

  useEffect(() => {
    if(countdownHasEnded) isGameEnded();
  }, [countdownHasEnded]);

  useEffect(() => {
    if(resetTimer) resetCountdown(1);
    
    getMaxTime(60 * minutes);
  }, [resetTimer]);

  return(
    <>
      <TimerContainer>
        <span>{minutes} : </span>
        <span>{seconds.toString().padStart(2, 0)}</span>
      </TimerContainer>
    </>
  );
}
