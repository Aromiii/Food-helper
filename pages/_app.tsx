import '../styles/globals.css'
import {AppProps} from 'next/app'
import NavbarWrapper from "../components/navbar/navbarWrapper";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NavbarWrapper/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp