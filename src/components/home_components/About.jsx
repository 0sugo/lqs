import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div className="my-8  flex flex-col">
      <h2 className="text-customRed2 md:px-12">ABOUT LIQUORBOX</h2>
      <p className="text-customBlack my-4 md:px-12">
        Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam
        praesent congue nunc vulputate fermentum sodales nunc. Pellentesque
        massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh
        lectus aliquam risus. Volutpat aenean tristique sapien sagittis
        vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate
        at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh.
        Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque
        placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem
        in. Purus magna in sit gravida massa vehicula integer dui elementum.
        Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum
        ultrices.
      </p>
      <div className="bg-customRed2 md:w-[60%] md:rounded-r-3xl gap-8  flex items-center justify-center  text-white py-2  my-4">
        <div className="flex flex-col md:flex-row md:gap-8 gap-2 p-2">
          <span className="text-xl">Let's Interact...</span>
          <div className=" flex gap-6 justify-between">
            <IoLogoInstagram className="size-8" />
            <FaFacebook className="size-8" />
            <FaTiktok className="size-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
