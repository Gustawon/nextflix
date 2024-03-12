import { roboto_slab } from "./_app";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center gap-10 text-7xl pt-40`}
      >
        <div className={`${roboto_slab.className}`}>NEXTFLIX - div styling</div>
        <div>NEXTFLIX - default app styling</div>
      </main>
    </>
  );
}
