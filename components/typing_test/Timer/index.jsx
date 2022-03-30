import { useEffect, useState } from "react";

import styled from "styled-components";

export default function Timer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if(props.isGameStarted === false) return;

    const timer = seconds > 0 && setInterval(() => {
      setSeconds(prevSec => prevSec - 1);
    }, 1000);
    
    if(seconds === 0) {
      setSeconds(60);
      setMinutes(prevMin => prevMin - 1);
    }

    if(seconds === 0 && minutes === 0) {
      setSeconds(0);
      setMinutes(0);
    }

    return () => clearInterval(timer);
  }, [seconds, props.isGameStarted]);

  useEffect(() => {
    if(props.shouldResetTimer) {
      setMinutes(1);
      setSeconds(0);
    }

  }, [props.shouldResetTimer]);

  function formatSeconds() {
    let formattedSeconds = seconds.toString();

    if(seconds === 60) {
      formattedSeconds = '00';
    }

    if(seconds < 10) {
      formattedSeconds = '0' + seconds;
    }

    return <>{formattedSeconds}</>;
  }
  return(
    <>
      <div>
        <Seconds>{minutes} : </Seconds>
        <Seconds>{formatSeconds()}</Seconds>
      </div>
    </>
  );
}

const Seconds = styled.span`
  font-size: 2rem;
`;