import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto_Slab } from "next/font/google";

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto_slab.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
