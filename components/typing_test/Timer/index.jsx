import { useEffect, useState } from "react";

import styled from "styled-components";

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  
  useEffect(() => {
    const timer = seconds > 0 && setInterval(() => {
      setSeconds(prevState => prevState - 1);
    }, 1000);
    


    return () => clearInterval(timer);
  }, [seconds]);

  return(
    <>
      <div>
        <Seconds>{seconds}</Seconds>
      </div>
    </>
  );
}

const Seconds = styled.span`
  font-size: 2rem;
`;