import { useEffect } from "react";
import useTimeCountdown from "../../../utils/useTimeCountdown";

import {
  TimerContainer
} from "./styles";

export default function Timer(props) {
  const {
    minutes,
    seconds,
    countdownHasEnded,
    resetCountdown,
  } = useTimeCountdown(props.isGameStarted, 1);

  useEffect(() => {
    props.getTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if(countdownHasEnded) props.isGameEnded();
  }, [countdownHasEnded]);

  useEffect(() => {
    if(props.resetTimer) resetCountdown(1);
    
    props.getMaxTime(60 * minutes);
  }, [props.resetTimer]);

  return(
    <>
      <TimerContainer>
        <span>{minutes} : </span>
        <span>{seconds.toString().padStart(2, 0)}</span>
      </TimerContainer>
    </>
  );
}
