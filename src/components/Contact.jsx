import React from "react";
import { TbMap2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-white px-2 py-10">
      <div className="flex flex-col justify-center items-center gap-3 text-center pb-10">
        <h1 className="text-[1.1rem] font-bold text-[#147EFB]">CONTACT</h1>
        <h2 className="text-[1.6rem] font-bold leading-9">
          Don't be shy! Hit me up! 👇
        </h2>
      </div>
      <div className="flex flex-col items-center text-center gap-10 my-5">
        <div className="flex flex-col gap-3 items-center">
          <TbMap2
            className="text-[3rem] p-2 rounded-2xl shadow-xl"
            color="#147EFB"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[1.2rem]">Location</h1>
            <p className="text-[1rem] text-[#767676]">Ahmedabad, Gujarat</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <AiOutlineMail
            className="text-[3rem] p-2 rounded-2xl shadow-xl"
            color="#147EFB"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[1.2rem]">Mail</h1>
            <p className="text-[1rem] text-[#767676]">
              darshitdeveloper@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
