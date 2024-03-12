import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useState } from "react";

interface NavBarProps {
  username: string;
}

const NavBar = (props: NavBarProps) => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);

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

  const { username } = props;
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
              <div className="absolute ml-auto mt-2 py-2 bg-gray-800">
                <div className="px-4">
                  <Link href="/login" className="">
                    Sign out
                  </Link>
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
