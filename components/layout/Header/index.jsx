import ThemeSwitcher from "../../interface/ThemeSwitcher";

import { FaSun, FaMoon } from "react-icons/fa"
import { GradientWrapper, Navbar, Logo, SwitcherWrapper } from "./styles";

export default function Header({isDarkModeOn, onClick}) {
  return(
    <>
    <GradientWrapper isDarkModeOn={isDarkModeOn}>
      <Navbar>
          <Logo>
            Keyboard Hero
          </Logo>
          <SwitcherWrapper>
            <FaSun className="icon"/>
            <ThemeSwitcher toggled={isDarkModeOn} onClick={onClick}/>
            <FaMoon className="icon"/>
          </SwitcherWrapper>
      </Navbar>
    </GradientWrapper>
    </>
  );
}