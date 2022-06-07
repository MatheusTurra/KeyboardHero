import { ButtonContainer } from "./styles";
import { MdRefresh } from "react-icons/md";

import { GameContext } from "../../../providers/GameContext";

import { useContext } from "react";

export default function ResetButton({ isDarkModeOn }) {
  const { dispatch } = useContext(GameContext);

  function handleResetGame() {
    dispatch({type: "resetState"});
  }

  return(
    <>
      <ButtonContainer 
        isDarkModeOn={isDarkModeOn}
        onClick={handleResetGame}
      >
        <MdRefresh />
      </ButtonContainer>
    </>
  )
} 