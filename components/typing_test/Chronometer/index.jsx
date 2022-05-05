import useChronometer from "../../../utils/useChronometer";

import { ChronometerContainer } from "./styles";
 
export default function Chronometer() {
  const [minutes, seconds, isGameStarted] = useChronometer();

  return (
    <ChronometerContainer>
      <span>{minutes > 0 && minutes + ":"} </span>
      <span>{isGameStarted && seconds.toString().padStart(2, 0)}</span>
    </ChronometerContainer>
  );
}