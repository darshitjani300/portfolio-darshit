import React from "react";
import { IoMdOpen } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="flex flex-col py-5 px-2 sm:px-12 md:px-20 lg:px-12 xl:px-52 ">
      <div className="flex flex-col sm:items-start justify-center items-center gap-3 text-center">
        <h1 className="text-[1rem] font-bold text-[#147EFB] leading-5">
          PORTFOLIO
        </h1>
        <h2 className="text-[1.6rem] font-bold leading-9">
          Each project is a unique piece of development 🧩
        </h2>
        <div className="px-3 md:px-0 mt-10">
          <div className="grid bg-white rounded-xl shadow-xl sm:gap-10 grid-rows-2 xl:grid-rows-1 grid-cols-1">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-2 p-4 sm:p-10">
              <div className="w-full">
                <img
                  src="car-rental.png"
                  className="rounded-xl shadow-lg"
                  alt="car-rental"
                />
              </div>
              <div className="flex flex-col text-center lg:px-10 items-center gap-5 pt-10 lg:pt-0">
                <h1 className="font-bold text-[1.1rem]">
                  CAR RENTAL{" "}
                  <span className="text-[hsla(0,5%,8%,.773)] text-[0.9rem]">
                    (SEPTEMBER 2023)
                  </span>
                </h1>
                <p className="text-[#767676] font-medium tracking-wide px-2">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="flex items-center justify-center gap-5">
                  <button className=" p-2 font-bold shadow-md">React</button>
                  <button className=" p-2 font-bold shadow-md">TAILWIND</button>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="https://github.com/darshitjani300/rental-car.git"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Code
                    <FiGithub className=" text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
                  </a>
                  <a
                    href="https://rental-car300.netlify.app"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Live Demo
                    <IoMdOpen className="text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-2 p-4 sm:p-10">
              <div className="w-full">
                <img
                  src="gym-ecom.png"
                  className="rounded-xl shadow-lg"
                  alt="Gym-Ecomm"
                />
              </div>
              <div className="flex flex-col lg:w-[80%] lg:mx-auto text-center items-center gap-5 pt-10 lg:pt-0">
                <h1 className="font-bold text-[1.1rem]">
                  GYMNITE{" "}
                  <span className="text-[hsla(0,5%,8%,.773)] text-[0.9rem]">
                    (SEPTEMBER 2023)
                  </span>
                </h1>
                <p className="text-[#767676] font-medium tracking-wide px-2">
                  A GYMNITE website, with its focus on simplicity and clean
                  design, along with a touch of Swipers, is a comprehensive
                  resource for fitness information and products. This ensures an
                  easy user experience and allows customers to find and purchase
                  the products they need.
                </p>
                <div className="flex items-center justify-center gap-5">
                  <button className=" p-2 font-bold shadow-md">React</button>
                  <button className=" p-2 font-bold shadow-md">TAILWIND</button>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="https://github.com/darshitjani300/ecom.git"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Code
                    <FiGithub className=" text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
                  </a>
                  <a
                    href="https://gymnite.netlify.app/"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Live Demo
                    <IoMdOpen className="text-[1.6rem] ease-in-out cursor-pointer duration-[0.3s] hover:scale-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
