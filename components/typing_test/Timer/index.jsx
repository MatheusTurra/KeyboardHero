import { useEffect, useState } from "react";

import styled from "styled-components";

export default function Timer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if(props.isGameStarted === false) return;

    const timer = seconds > 0 && setInterval(() => {
      setSeconds(prevSec => prevSec - 1);
      props.getTimeLeft(seconds);
    }, 1000);
    
    if(seconds === 0) {
      setSeconds(59);
      setMinutes(prevMin => prevMin - 1);
    }

    if(seconds === 0 && minutes === 0) {
      setSeconds(0);
      setMinutes(0);
      props.isGameEnded();
    }

    return () => clearInterval(timer);
  }, [seconds, props.isGameStarted]);

  useEffect(() => {
    if(props.shouldResetTimer) {
      setMinutes(1);
      setSeconds(0);
    }
    
    props.getMaxTime(60 * minutes);
  }, [props.shouldResetTimer]);

  return(
    <>
      <div>
        <Seconds>{minutes} : </Seconds>
        <Seconds>{seconds.toString().padStart(2, 0)}</Seconds>
      </div>
    </>
  );
}

const Seconds = styled.span`
  font-size: 2rem;
`;