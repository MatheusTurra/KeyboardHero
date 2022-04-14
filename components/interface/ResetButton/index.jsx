import { MdRefresh } from "react-icons/md";
import { ButtonContainer } from "./styles";

export default function ResetButton({isDarkModeOn, onClick}) {
  return(
    <>
      <ButtonContainer isDarkModeOn={isDarkModeOn} onClick={onClick}>
        <MdRefresh />
      </ButtonContainer>
    </>
  )
} 