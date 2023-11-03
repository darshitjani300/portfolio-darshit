import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-[#2d2e32] px-2 sm:px-12 xl:px-52">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-center text-center py-10">
        <h1 className="text-white font-bold tracking-wide text-[1.1rem]">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-6 py-3">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/darshit-jani/"
            target="_blank"
          >
            <PiLinkedinLogoBold className=" text-white text-[1.6rem]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/darshitjani300"
            target="_blank"
          >
            <FiGithub className="text-[1.6rem] text-white" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
