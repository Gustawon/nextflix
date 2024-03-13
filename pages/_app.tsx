import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto_Slab } from "next/font/google";
import { useEffect, useState } from "react";

import magic from "@/lib/magic-client";
import { useRouter } from "next/router";
import Loading from "@/components/loading";

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(
    router.route === "/login" ? false : true
  );

  useEffect(() => {
    const handleLoggedIn = async () => {
      if (magic) {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          router.push("/");
        } else {
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    };
    handleLoggedIn();
  }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      // clear events listeners
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto_slab.style.fontFamily};
          }
        `}
      </style>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}
