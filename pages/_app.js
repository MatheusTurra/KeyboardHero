import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  function handleThemeChange() {
    setTheme(theme.title === "light" ? dark : light);
  }
  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} changeTheme={handleThemeChange}/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
