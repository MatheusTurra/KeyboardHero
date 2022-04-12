import Header from "../components/layout/Header";
import ThemeSwitcher from "../components/interface/ThemeSwitcher";
import WordChecker from "../components/typing_test/WordChecker";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import GlobalStyle from "../styles/GlobalStyle";

import { parseCookies, setCookie } from "nookies";

import { ThemeProvider } from "styled-components";

import { useState } from "react";

export default function Home(props) {
  const [theme, setTheme] = useState(props.theme);
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  function setPersistedTheme(theme) {
    const twoDaysInSeconds = 8600 * 2;

    setTheme(theme);
    setCookie(null,  "theme", JSON.stringify(theme), {
      path: "/",
      maxAge: twoDaysInSeconds
    });
  }

  function handleThemeChange() {
    setIsDarkModeOn(prevState => {
      const newState = !prevState;
      
      if(newState) setPersistedTheme(dark);
      else setPersistedTheme(light)
      return newState;
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ThemeSwitcher toggled={isDarkModeOn} onClick={handleThemeChange}/>
        <WordChecker />
      </ ThemeProvider >
    </>
  );
}

export async function getServerSideProps(context) {
  let storedTheme = dark;
  const userCookies = parseCookies(context);

  if(userCookies.theme) {
    storedTheme = JSON.parse(userCookies.theme);
    console.log(storedTheme)
  }

  return {
    props: {
      theme: storedTheme
    }
  }
}
