import { GameContext } from "../providers/GameContext";

import { useContext, useEffect, useState } from "react";

export default function useTimer(totalTime = 1) {
  const [minutes, setMinutes] = useState(totalTime);
  const [seconds, setSeconds] = useState(0);

  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    if(state.isGameStarted === false ) {
      setMinutes(totalTime);
      setSeconds(0);
      return;
    }

    if(minutes === 0 && seconds === 0) {
      setMinutes(0);
      setSeconds(0);
      dispatch({ type: "updateIsGameOver", value: true });
      return;
    }

    const oneSecond = 100;
    const timerInterval = setInterval(() => {
      setSeconds(prevState => prevState - 1);
    }, oneSecond);

    if(seconds === 0) {
      setSeconds(59);
      setMinutes(prevState => prevState - 1);
    }

    return () => clearInterval(timerInterval);

  }, [minutes, seconds, state.isGameStarted]);

  return [minutes, seconds, state.isGameStarted];
}