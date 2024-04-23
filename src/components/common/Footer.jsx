import React from "react";
import logo from "/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col text-xs px-4 py-8 gap-6 text-[#FFB59F] relative bottom-0">
      <div>
        <img src={logo} />
      </div>
      <div class="flex md:w-[80%] m-auto md:flex-row flex-col gap-4 justify-between">
        <div className="font-semibold flex flex-col gap-6">
          <span className="font-semibold text-white">OUR BRANCHES</span>
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold">Branch A.</span>
            <div className="flex flex-col gap-3 ">
              <span className="font-semibold flex items-center gap-2">
                <FaMapLocationDot />
                White Lane Hse. Commercial Street, Machakos
              </span>
              <div className="flex font-semibold gap-2">
                <span className="text-[#FFB59F] font-semibold flex items-center text-nowrap gap-2 ">
                  <FaPhoneAlt />
                  0700 044 154
                </span>
                <span className="text-white font-semibold">
                  Business Hours: Mon – Sun, 10:00am – 20:00pm
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-semibold">Branch B.</span>
            <div className="flex flex-col gap-3">
              <span className="text-[#FFB59F] font-semibold flex items-center gap-2 text-nowrap">
                <FaMapLocationDot />
                Young Club Hotel, City Center, Machakos
              </span>
              <div className="flex gap-2">
                <span className="font-semibold flex items-center gap-2 text-nowrap">
                  <FaPhoneAlt />
                  0756 067 368
                </span>
                <span className="text-white font-semibold">
                  Business Hours: Mon – Sun, 10:00am – 20:00pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold">RECENT POSTS</span>
          <span className="font-semibold">
            Cheers to Local Flavors : Exploring Machakos Craft Beer Scene with
            LiqourBox
          </span>
          <span className="font-semibold">
            Mix and Mingle : Hosting the Ultimate Cocktail Party with
            LiquorBox’s Party Planning Guide
          </span>
          <span className="font-semibold">
            Sip and Savor : Exploring the Art of Food Pairing with LiquorBox’s
            Guide to Flavour Harmony
          </span>
          <span className="font-semibold">
            Toast to Tradition : Exploring Classic Cocktail Recipes with
            LiquorBox
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold">CORPORATE GIFTING</span>
          <span className="font-semibold">FOOD SAFETY POLICY</span>
          <span className="font-semibold">REFUNDS POLICY</span>
          <span className="font-semibold">PRIVACY POLICY</span>
          <span className="font-semibold">COOKIE POLICY</span>
          <span className="font-semibold">TERMS AND CONDITIONS</span>
        </div>
      </div>

      <div className="border md:w-[80%] w-full mx-auto border-[#D53E00]"></div>
      <span className="text-white font-semibold tracking-tighter">
        Copyright @ 2024, LiquorBox, Site by Pyraus, Design by Emma
      </span>
    </div>
  );
};

export default Footer;
