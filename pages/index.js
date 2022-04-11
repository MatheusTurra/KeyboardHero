import Header from "../components/layout/Header";
import ThemeSwitcher from "../components/interface/ThemeSwitcher";
import WordChecker from "../components/typing_test/WordChecker";

import { useState } from "react";

export default function Home({changeTheme}) {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  function handleThemeChange() {
    setIsDarkModeOn(prevState => !prevState);
    changeTheme();
  }

  return (
    <>
      <Header />
      <ThemeSwitcher toggled={isDarkModeOn} onClick={handleThemeChange}/>
      <WordChecker />
    </>
  );
}
