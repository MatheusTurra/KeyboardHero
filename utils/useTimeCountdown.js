import { useState, useEffect, useCallback } from "react";

export default function useTimeCountdown(startCountdown, totalTime) {
  const [minutes, setMinutes] = useState(totalTime);
  const [seconds, setSeconds] = useState(0);
  const [countdownHasEnded, setCountdownHasEnded] = useState(false);

  useEffect(() => {
    if(startCountdown === false) return;

    const timerInterval = seconds > 0 && setInterval(() => {
      setSeconds(prevSec => prevSec - 1);
    }, 1000);

    if(seconds === 0) {
      setSeconds(59);
      setMinutes(prevMin => prevMin - 1);
    }

    if(seconds === 0 && minutes === 0) {
      setSeconds(0);
      setMinutes(0);
      setCountdownHasEnded(true);
    }

    return () => clearInterval(timerInterval);
  }, [seconds, startCountdown]);

  const resetCountdown =  useCallback(minutes => {
    setCountdownHasEnded(false);
    setMinutes(minutes);
    setSeconds(0);
  });

  return {minutes, seconds, countdownHasEnded, resetCountdown};
}