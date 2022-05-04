import useChronometer from "../../../utils/useChronometer";

import { 
  ChronometerContainer
 } from "./styles";
 
export default function Chronometer() {
  const [minutes, seconds] = useChronometer(true);

  return (
    <ChronometerContainer>
      <span>{minutes > 0 && minutes + " : "} </span>
      <span>{seconds.toString().padStart(2, 0)}</span>
    </ChronometerContainer>
  );
}