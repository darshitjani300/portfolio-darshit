import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-around lg:px-5 lg:py-20 xl:px-40 items-center justify-center text-center lg:text-start px-5">
      <div className="h-[200px] w-[200px] lg:h-[320px] lg:w-[320px] my-5">
        <img
          src="images/photo.png"
          className="h-full w-full rounded-[50%] object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-7 mb-5 max-w-[400px] sm:max-w-[450px] lg:max-w-[550px] lg:p-5 justify-start items-start">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#2d2e32] font-bold text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.2]">
            Front-End React Developer{" "}
          </h1>
          <p className="text-[#555] tracking-wide text-[1.1rem] font-[400]">
            Hi, I'm Darshit Jani. A passionate Front-end React Developer based
            in Ahmedabad, Gujarat.
          </p>
        </div>
        <div className="flex items-center justify-center w-full lg:justify-start gap-6">
          <PiLinkedinLogoBold
            size="1.8rem"
            className="hover:text-[#147efb]  ease-in-out cursor-pointer duration-[0.3s]"
          />
          <FiGithub
            size="1.8rem"
            className="hover:text-[#147efb] ease-in-out cursor-pointer duration-[0.3s]"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-7 mt-10">
          <h1 className="text-[#2d2e32] font-semibold text-[1rem] border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-black pb-2">
            Tech Stack{" "}
          </h1>
          <ul className="flex flex-col sm:flex-row items-center justify-center pb-5 gap-5">
            <div className="flex gap-6">
              <div className="flex items-center gap-5">
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                  />
                </li>
              </div>
              <div className="flex items-center gap-5">
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                  />
                </li>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <li>
                <img
                  src="https://skillicons.dev/icons?i=react"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                />
              </li>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=redux"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointer relative hover:bottom-2"
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;