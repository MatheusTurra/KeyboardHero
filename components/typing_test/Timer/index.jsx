import useTimer from "../../../utils/useTimer";

import {
  TimerContainer
} from "./styles";

export default function Timer() {
  const [minutes, seconds, isGameStarted] = useTimer();
  
  return(
    <>
      <TimerContainer showTimer={isGameStarted}>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </TimerContainer>
    </>
  );
}
