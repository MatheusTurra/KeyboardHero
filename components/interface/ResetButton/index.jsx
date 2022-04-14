import { MdRefresh } from "react-icons/md";
import { ButtonContainer } from "./styles";

export default function ResetButton({isDarkModeOn}) {
  return(
    <>
      <ButtonContainer isDarkModeOn={isDarkModeOn}>
        <MdRefresh />
      </ButtonContainer>
    </>
  )
} 