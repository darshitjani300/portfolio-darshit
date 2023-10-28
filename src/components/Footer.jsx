import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-[#2d2e32] px-2 sm:px-12 xl:px-52">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-center text-center py-10">
        <h1 className="text-white font-bold tracking-wide text-[1.1rem]">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-4 py-3">
          <a href="https://www.linkedin.com/in/darshit-jani/" target="_blank">
            <PiLinkedinLogoBold className=" text-white text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
          </a>
          <a href="https://github.com/darshitjani300" target="_blank">
            <FiGithub className="hover:scale-50 text-[1.6rem] text-white ease-in-out cursor-pointer duration-[0.3s]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
