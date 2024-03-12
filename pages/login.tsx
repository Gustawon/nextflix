import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState, ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";

const Login: NextPage<{}> = (props) => {
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleLoginWithEmail = (event: MouseEvent) => {
    event.preventDefault();

    if (email) {
      // TODO implement email validation
      if (email === "sebastian@email.com") {
        router.push("/");
      } else {
        setUserMsg("Something went wrong when logging in");
      }
    } else {
      // show user message
      setUserMsg("Enter a valid email address");
    }
  };

  const handleOnChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserMsg("");
    setEmail(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Nextlix Login</title>
      </Head>
      <div className="flex flex-col items-center justify-start min-h-screen loginBackground">
        <header className="flex justify-between w-full py-8 md:py-12">
          <div className="px-8 md:px-16 flex flex-row">
            <Link
              className="flex font-medium items-center text-white10 mb-4"
              href="/"
            >
              <div className="text-redish w-32">
                <Image
                  src={"/static/nextflix.png"}
                  alt="Netflix logo"
                  width="128"
                  height="30"
                />
              </div>
            </Link>
          </div>
        </header>
        <main className="relative flex w-full h-screen z-10 justify-center">
          <form className="flex flex-col pb-8 pt-8  h-[320px] bg-blackish20 px-12 rounded-md min-w-[240px]">
            <h1 className="text-white10 font-bold text-3xl mb-8">Log In</h1>
            <input
              type="email"
              placeholder="Email address"
              className="p-2 text-blackish30 w-full h-12 min-w-[240px] text-lg"
              onChange={handleOnChangeEmail}
            />
            <p className="my-1 text-white20">{userMsg}</p>
            <button
              onClick={handleLoginWithEmail}
              className="bg-redish10 px-12 py-2 text-lg text-white10 w-full rounded-md mt-8"
            >
              Login
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
