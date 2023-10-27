import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="h-[20vh] w-full bg-[#2d2e32]">
      <div className="container flex justify-between items-center py-10">
        <h1 className="text-white font-bold text-[14px]">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-3">
          <PiLinkedinLogoBold
            size="1.5rem"
            className=" text-white ease-in-out cursor-pointer duration-[0.3s] hover:scale-50"
          />
          <FiGithub
            size="1.5rem"
            className="hover:scale-50 text-white ease-in-out cursor-pointer duration-[0.3s]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
