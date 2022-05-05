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