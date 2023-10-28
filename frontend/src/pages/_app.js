import GlobalStyle from "../styles/GlobalStyle";
import ResetStyle from "../styles/ResetStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyle></ResetStyle>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </>
  );
}
