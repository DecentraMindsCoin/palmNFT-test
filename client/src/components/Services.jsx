import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-20 h-20 rounded-full my-auto flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white font-semi-bold underline font- text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start pb-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What's all the 
          <br />
          hype around Palm NFT Studio?
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-xl">
        A new NFT ecosystem for Culture & Creativity, built efficiently with Ethereum.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start">
        <ServiceCard
          color="bg-yellow-300"
          title="Scalable and
          Sustainable"
          icon={<BsShieldFillCheck fontSize={32} className="text-white" />}
          subtitle="Together, with some of the biggest names in fine art, cryptoart, and entertainment, we are building a new creative studio and NFT platform on Ethereum that is both scalable and sustainable."
        />
        <ServiceCard
          color="bg-purple-400"
          title="Invested in
          Creativity"
          icon={<BiSearchAlt fontSize={32} className="text-white" />}
          subtitle="Palm NFT Studio brings projects and platforms into the Palm ecosystem by supporting and collaborating with creatives, artists, marketplaces, and rights holders."
        />

        <ServiceCard
          color="bg-[#F84550]"
          title="Low Gas,
          Shared Growth"
          icon={<RiHeart2Fill fontSize={32} className="text-white" />}
          subtitle="Creators using the Palm Network will benefit from super low gas fees, and the Palm ecosystem will reward both creators and participants."
        />
      </div>
    </div>
  </div>
);

export default Services;