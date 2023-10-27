import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="py-20 container ">
        <div>
          <h1 className="text-[13px] font-bold text-[#147EFB] py-2">CONTACT</h1>
          <h2 className="font-bold text-[#2d2e32] tracking-wide py-2">
            Don't be shy! Hit me up! 👇
          </h2>
        </div>
        <div className="flex gap-10 pt-10">
          <div className="flex gap-3 items-center">
            <BiCurrentLocation
              size={40}
              className=" rounded-[40%] shadow-md p-2"
              color="#147EFB"
            />
            <div>
              <h1 className="font-bold text-[13px] text-[#2d2e32]">Location</h1>
              <p className="text-[12px] text-[#767676]">Ahmedabad, Gujarat</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineMail
              size={40}
              className=" rounded-[40%] shadow-md p-2"
              color="#147EFB"
            />
            <div>
              <h1 className="font-bold text-[13px] text-[#2d2e32]">Mail</h1>
              {/* <p className="text-[12px] text-[#767676]">
                darshitdeveloper@gmail.com
              </p> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
