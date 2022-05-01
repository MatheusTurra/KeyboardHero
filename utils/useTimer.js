import { useEffect, useState } from "react";

export default function useTimer(startTimer) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const oneSecond = 1000;
    const timerInterval = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, oneSecond);

    if(seconds === 60) {
      setSeconds(0);
      setMinutes(prevState => prevState + 1);
    }

    return () => clearInterval(timerInterval);
  }, [minutes, seconds]);
  
  return [minutes, seconds];
}