import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}
