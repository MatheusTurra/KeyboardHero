import ThemeSwitcher from "../../interface/ThemeSwitcher";

import { Navbar, Logo, SwitcherWrapper } from "./styles";

export default function Header({isDarkModeOn, onClick}) {
  return(
    <>
      <Navbar>
          <Logo>
            Keyboard Hero
          </Logo>
          <SwitcherWrapper>
            <ThemeSwitcher toggled={isDarkModeOn} onClick={onClick}/>
          </SwitcherWrapper>
      </Navbar>
    </>
  );
}