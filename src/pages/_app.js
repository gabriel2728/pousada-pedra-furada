// pages/_app.js
import "../styles/globals.css"; // Global CSS apenas aqui

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}