import React from "react";

const About = () => {
  return (
    <div className="bg-white h-[80vh] pt-10 ">
      <div className=" container py-10 flex gap-16">
        <div>
          <div className="w-[300px] h-[250px] relative">
            <img
              src="/images/main.png"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="absolute bottom-[-30px] right-[-55px]">
              <div className="bg-white h-[130px] w-[130px] z-[40] relative ml-10 rounded-[50%]">
                <img
                  src="/images/outerimg.png"
                  alt=""
                  className="absolute h-[130px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
                <img
                  src="/images/subimg.png"
                  alt=""
                  className="absolute h-[60px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[14px] font-bold text-blue-500">ABOUT ME</h3>
          <h1 className="font-semibold text-[#2d2e32]">
            A dedicated Front-end Developer based in Ahmedabad, Gujarat 📍
          </h1>
          <p className="text-[12px] text-[#767676]">
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
