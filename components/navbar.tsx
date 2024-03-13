import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import magic from "@/lib/magic-client";

interface NavBarProps {}

const NavBar = () => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getUsername() {
      try {
        if (magic) {
          const { email } = await magic.user.getInfo();
          if (email) {
            setUsername(email);
          }
        }
      } catch (error) {
        console.log("Error retrieving email:", error);
        // router.push("/login");
      }
    }
    getUsername();
  });

  const handleOnClickHome = () => {
    // e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = () => {
    // e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = () => {
    // e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    e.preventDefault();
    async function logOutUser() {
      try {
        if (magic) {
          await magic.user.logout();
          router.push("/login");
        }
      } catch (error) {
        console.error("Error logging out", error);
        router.push("/login");
      }
    }
    logOutUser();
  };

  return (
    <nav className={"fixed top-0 text-white10 navbarBackground w-full z-50"}>
      <div className="flex px-4 py-5">
        <Link href="/">
          <Image
            src={"/static/nextflix.png"}
            alt="Nextflix logo"
            width="128"
            height="30"
          />
        </Link>

        <ul className="flex flex-row w-6/12 ml-6 text-base list-none font-semibold ">
          <li className="cursor-pointer mr-3" onClick={handleOnClickHome}>
            Home
          </li>
          <li className="cursor-pointer" onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className="flex items-start ml-auto">
          <div>
            <button onClick={handleShowDropdown} className="flex items-center">
              <p className="text-base">{username}</p>
              {/* Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24"
                height="24"
              />
            </button>
            {showDropdown && (
              <div className="absolute ml-auto mt-2 py-2 bg-blackish">
                <div className="px-4">
                  <a
                    onClick={(e) => handleSignout(e)}
                    className="cursor-pointer"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
