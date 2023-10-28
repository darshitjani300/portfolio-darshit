import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-[#2d2e32] px-2 sm:px-12 xl:px-40">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-center text-center py-10">
        <h1 className="text-white font-bold tracking-wide text-[1.1rem]">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-4 py-3">
          <PiLinkedinLogoBold className=" text-white text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
          <FiGithub className="hover:scale-50 text-[1.6rem] text-white ease-in-out cursor-pointer duration-[0.3s]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
