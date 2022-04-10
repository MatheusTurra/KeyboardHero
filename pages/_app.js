import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
 
function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
