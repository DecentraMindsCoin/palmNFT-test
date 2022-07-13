import React from "react";
import { NavLinks } from "./Navbar";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      {NavLinks.map((nav, index) => (
            <div
              key={index}
              className="cursor-pointer border-b border-white hover:border-none lg:border-b-0"
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
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center uppercase">Join us to discover what all the hype is about!</p>
      <a className="text-white text-sm text-center font-medium mt-2 hover:text-yellow-300" href="https://palm.io">Visit Palm.io</a>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <a className="text-white text-left text-xs" href="https://decentraminds.com">Built by @decentraminds</a>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;