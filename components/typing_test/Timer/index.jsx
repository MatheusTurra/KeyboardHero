import { useEffect } from "react";
import useTimeCountdown from "../../../utils/useTimeCountdown";

import {
  TimerContainer
} from "./styles";

export default function Timer({resetTimer, isGameStarted, getTimeLeft, isGameEnded, getMaxTime}) {
  const {
    minutes,
    seconds,
    countdownHasEnded,
    resetCountdown,
  } = useTimeCountdown(isGameStarted, 1);

  useEffect(() => {
    getMaxTime(60 * minutes);
  }, []);

  useEffect(() => {
    getTimeLeft(seconds);
  }, [seconds, getTimeLeft]);

  useEffect(() => {
    if(countdownHasEnded) isGameEnded();
  }, [countdownHasEnded, isGameEnded]);

  useEffect(() => {
    if(resetTimer) resetCountdown(1);
    
  }, [minutes, resetTimer, getMaxTime, resetCountdown]);

  return(
    <>
      <TimerContainer>
        <span>{minutes} : </span>
        <span>{seconds.toString().padStart(2, 0)}</span>
      </TimerContainer>
    </>
  );
}
