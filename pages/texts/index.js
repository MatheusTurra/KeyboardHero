import Seo from "../../components/Seo";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import TextChecker from "../../components/game/TextChecker";

import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import GlobalStyle from "../../styles/GlobalStyle";

import { GameProvider } from "../../providers/GameContext";

import { parseCookies, setCookie } from "nookies";
import { ThemeProvider } from "styled-components";

import { useState } from "react";

export default function Home(props) {
  const [theme, setTheme] = useState(props.theme);
  const [isDarkModeOn, setIsDarkModeOn] = useState(getThemeStatus);

  function getThemeStatus() {
    if(props.theme.title === "dark") return true;
    else return false;
  }

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
      else setPersistedTheme(light);
      return newState;
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <GlobalStyle />
      <Header isDarkModeOn={isDarkModeOn} onClick={handleThemeChange}/>
      <GameProvider>
        <TextChecker isDarkModeOn={isDarkModeOn} />
      </GameProvider>
      <Footer />
    </ ThemeProvider >
  );
}

export async function getServerSideProps(context) {
  let storedTheme = light;
  const userCookies = parseCookies(context);

  if(userCookies.theme) {
    storedTheme = JSON.parse(userCookies.theme);
  }

  return {
    props: {
      theme: storedTheme
    }
  }
}
