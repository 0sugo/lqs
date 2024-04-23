import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Interact = () => {
  return (
    <div className="bg-customRed2 w-[100%]  gap-8  flex  text-white py-2 ">
      <div className="flex  gap-8  p-2">
        <span className="text-xl">Let's Interact...</span>
        <div className=" flex gap-6 justify-between">
          <IoLogoInstagram className="size-8" />
          <FaFacebook className="size-8" />
          <FaTiktok className="size-8" />
        </div>
      </div>
    </div>
  );
};

export default Interact;
