import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
