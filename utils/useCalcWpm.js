import { useContext } from "react";
import { GameContext } from "../providers/GameContext";


export function useCalcWpm() {
  const { state } = useContext(GameContext);
  const { totalRightKeyPresses, totalWrongKeyPresses, whenGameStarted } = state;
  
  const currentTime = new Date().getTime();
  const gameDurationInMinutes = (currentTime - whenGameStarted) / 60000;
  const totalValidKeyPresses = totalRightKeyPresses - totalWrongKeyPresses;
  
  let wpmResult = (totalValidKeyPresses / 5) / gameDurationInMinutes;

  if(wpmResult < 0) wpmResult = 0;
  
  return wpmResult.toFixed();
}

export function useCalcAccuracy() {
  const { state } = useContext(GameContext);
  const { totalRightKeyPresses, totalWrongKeyPresses } = state;
  
  const totalKeyPresses = totalRightKeyPresses + totalWrongKeyPresses;

  if(totalKeyPresses > 0) {
    const accuracyCalc = (totalRightKeyPresses / totalKeyPresses) * 100;
    return accuracyCalc.toFixed();
  } else {
    return 0;
  }
}
