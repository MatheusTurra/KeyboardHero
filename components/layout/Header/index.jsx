import ThemeSwitcher from "../../interface/ThemeSwitcher";

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
            <ThemeSwitcher toggled={isDarkModeOn} onClick={onClick}/>
          </SwitcherWrapper>
      </Navbar>
    </GradientWrapper>
    </>
  );
}