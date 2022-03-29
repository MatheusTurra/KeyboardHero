import { useEffect, useState } from "react";

import styled from "styled-components";

export default function Timer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(60);

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

  return(
    <>
      <div>
        <Seconds>{minutes} : </Seconds>
        <Seconds>{seconds}</Seconds>
      </div>
    </>
  );
}

const Seconds = styled.span`
  font-size: 2rem;
`;