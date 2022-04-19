import { useEffect } from "react";
import useTimeCountdown from "../../../utils/useTimeCountdown";

import {
  TimerContainer
} from "./styles";

export default function Timer({isGameStarted, resetTimer, getMaxTime}) {
  const [minutes, seconds, resetCountdown] = useTimeCountdown(isGameStarted, 1);

  useEffect(() => {
    if(resetTimer) {
      // setMinutes(1);
      // setSeconds(0);
      resetCountdown(1);
    }
    
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
