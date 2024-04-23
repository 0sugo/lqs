import React from "react";
import Contact from "../home_components/Contact";
import { FaHouse } from "react-icons/fa6";
const HeroContact = () => {
  return (
    <div class="min-h-[100vh] flex flex-col gap-4">
      <div class="w-[90%] flex gap-2 items-center m-auto">
        <FaHouse class="" /> / CONTACT
      </div>
      <div class="p-8 w-[40%] text-4xl  text-[#D53E00] shadow-black/50 shadow-sm rounded-r-[50px]">
        Contact Us
      </div>
      <Contact />
    </div>
  );
};

export default HeroContact;
