import React from "react";

const Contact = () => {
  return (
    <div className="flex md:w-[70%] m-auto md:flex-row flex-col border border-customRed rounded-[35px]">
      <div className="bg-customRed md:w-[40%] rounded-[35px] text-white p-8 flex flex-col gap-3">
        <h2>Any Inquiries?</h2>
        <p>
          Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam.
          Quam praesent congue nunc vulputate fermentum sodales nunc.
          Pellentesque massa ultricies lacinia ornare nibh dignissim neque.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="uppercase font-bold">call us</span>
            <span>0712345678</span>
          </div>

          <div className="flex justify-between">
            <span className="uppercase font-bold">visit us</span>
            <span>White Lane Hse</span>
          </div>
          <p>
            <span className="uppercase font-bold">Confirm your queries</span> by
            visiting our FAQs page
          </p>
          <p>
            <span className="uppercase font-bold">SEND US A MESSAGE </span>by
            filling the form provided.
          </p>
        </div>
      </div>

      <div className="p-6 md:w-[55%] rounded-lg">
        <form action="">
          <div className="flex flex-col w-[100%] space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-b border-[#5C4038] bg-[#FFE2DA] rounded-t-md  placeholder-[#5C4038] px-3 py-2"
            />
            <input
              type="text"
              placeholder="Second Name"
              className="border-b border-[#5C4038] bg-[#FFE2DA] rounded-t-md placeholder-[#5C4038] px-3 py-2"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="border-b border-[#5C4038] bg-[#FFE2DA] rounded-t-md placeholder-[#5C4038] px-3 py-2"
            />
            <textarea
              placeholder="Your Message here"
              className="border-b h-[168px] border-[#5C4038] bg-[#FFE2DA] rounded-t-md placeholder-[#5C4038] px-3 py-2"
            ></textarea>
          </div>
          <input
            type="submit"
            className="text-customRed bg-[#FFF1ED] py-2 px-4 uppercase mt-4 border-b border-[#5C4038] rounded-xl"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
