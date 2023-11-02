import React from "react";

const About = () => {
  return (
    <div className="bg-white w-full py-5 lg:px-5 lg:py-20 xl:px-40 px-5">
      <div className="py-12 flex items-center flex-col lg:grid lg:grid-cols-2 lg:justify-between">
        <div className="relative sm:h-[350px] 2xl:justify-self-center sm:w-[420px] px-3">
          <img
            src="main.png"
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="hidden sm:block absolute bottom-[-30px] right-[-55px]">
            <div className="hidden sm:block bg-white h-[130px] w-[130px] z-[40] relative ml-10 rounded-[50%]">
              <img
                src="circle.png"
                alt=""
                className="absolute h-[130px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
              <img
                src="circleinn.png"
                alt=""
                className="absolute h-[60px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col 2xl:justify-self-start 2xl:px-20 items-center text-center lg:text-start gap-3 px-2 sm:px-24 lg:px-0">
          <h3 className="text-[1rem] sm:text-[1.1rem] lg:w-full lg:mt-0 font-bold text-blue-500 mt-10">
            ABOUT ME
          </h3>
          <h1 className="font-bold text-[#2d2e32] w-full text-[1.6rem] sm:px-3 lg:px-0 leading-9">
            A dedicated Front-end Developer based in Ahmedabad, Gujarat 📍
          </h1>
          <p className="text-[1rem] text-[#767676]">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, Tailwind and React. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
