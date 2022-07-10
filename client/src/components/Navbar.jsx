import React, { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import MetamaskButton from "./MetamaskButton";
const NavLinks = [
  {
    linkName: "About",
    link: "https://palm.io/",
  },
  {
    linkName: "Get PALM",
    link: "https://docs.palm.io/Get-Started/Tokens/",
  },

  {
    linkName: "Explorer",
    link: "https://explorer.palm-uat.xyz/",
  },
  {
    linkName: "Developers",
    link: "https://docs.palm.io/HowTo/Develop-For-Palm/",
  },

  {
    linkName: "Blog",
    link: "https://palm.io/studio/",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <div className="md:flex w-full pr-5">
          {NavLinks.map((nav, index) => (
            <div
              key={index}
              className="cursor-pointer border-b border-white lg:border-b-0"
            >
              <a href={nav.link}>
                <div className="lg:inline-flex lg:w-auto px-2  py-4 active:bg-purple-500  hover:bg-button-image-2 rounded-xl text-gray-200 font-bold items-center  justify-center  hover:text-gray-200 hover:scale-110 transition duration-200 transform ease-out">
                  <h1 id="glitch" className="text-gray-200  text-center">
                    {nav.linkName}
                  </h1>
                </div>
              </a>
            </div>
          ))}
        </div>{" "}
        <MetamaskButton />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <div className="lg:flex w-full ">
              {NavLinks.map((nav, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-b border-white lg:border-b-0"
                >
                  <a href={nav.link}>
                    <div className="lg:inline-flex lg:w-auto px-2 pr-5 py-4 active:bg-purple-500 hover:pr-5  hover:bg-button-image-2 rounded-xl text-gray-200 font-bold items-center  justify-center  hover:text-gray-200 hover:scale-110 transition duration-200 transform ease-out">
                      <h1 id="glitch" className="text-gray-200  text-center">
                        {nav.linkName}
                      </h1>
                    </div>
                  </a>
                </div>
              ))}
            </div>{" "}
            <MetamaskButton />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
