import { GameContext } from "../providers/GameContext";

import { useContext, useEffect, useState } from "react";

export default function useChronometer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const { state } = useContext(GameContext);

  useEffect(() => {
    if(state.isGameStarted === false) {
      setMinutes(0);
      setSeconds(0);
      return;
    }

    const oneSecond = 1000;
    const timerInterval = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, oneSecond);

    if(seconds === 60) {
      setSeconds(0);
      setMinutes(prevState => prevState + 1);
    }

    return () => clearInterval(timerInterval);
  }, [minutes, seconds, state.isGameStarted]);
  
  return [minutes, seconds, state.isGameStarted];
}