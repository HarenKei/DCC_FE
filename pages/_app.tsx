import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/src/Common/Header";
import Footer from "@/src/Common/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
