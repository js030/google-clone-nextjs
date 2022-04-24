import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl 
  items-center px-6 py-3 ml-10 mr-5"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer
     transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden md:inline-flex text-blue-500
     border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden md:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="http://dhcdn.design.co.kr/cms/img/2015/10/M.1444090106.2739.0.jpg"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
