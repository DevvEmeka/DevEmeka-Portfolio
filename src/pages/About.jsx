import React from "react";
import image from "../assets/me.avif";
import { BsCaretRight } from "react-icons/bs";

function About() {
  return (
    <section className="py-[60px] md:py-[127px] px-[25px] mx-auto max-w-[60rem]">
      <div className="after:border-t after:border-[#233554] after:w-full after:border-[1px] after:-mt-[26px] after:h-[1px] md:after:ml-[-1px] md:max-w-[26rem] after:ml-[10px] flex items-center">
        <h2 className="flex items-center text-[clamp(26px,5vw,32px)] whitespace-nowrap w-full mr-0 mb-10 mt-[0.625rem] font-mono">
          <span className="text-[#64ffda] text-[clamp(15px,3vw,20px)] bottom-1 mr-[0.625rem] font-normal">
            01.
          </span>
          About Me
        </h2>
      </div>
      <div className="flex md:flex-row flex-col md:gap-[50px]">
        <div className="md:flex-1 font-calibre text-[18px]">
          <div>
            <p className="-mt-2 mb-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eius dolorum doloribus nulla ut ipsum, quis nobis possimus.
              Consequuntur iusto, perspiciatis incidunt at vel nobis veniam
              cumque necessitatibus quos atque?
            </p>
            <p className="mb-[15px] ">
              fast-forward to today, and I've had the privilege of working at{" "}
              <span className="text-[#64ffda]">
                an advertising agency, a start up, a huge corporation, and a
                student-led design studio.
              </span>{" "}
              My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <span className="text-[#64ffda]">Upstatement</span>
              for a variety of clients.
            </p>
            <p className="mt-3">
              I also recently{" "}
              <span className="text-[#64ffda]">launched a course</span> that
              covers everything you need to build a web app with spotify API
              using Node and React.
            </p>
            <p className="mt-3">
              Here are a few technologies I've been working with recently.
            </p>
          </div>
          <ul className="grid grid-cols-gridmix gap-x-[10px] gap-y-[0px] md:mb-[-20px] p-[0px] mt-[20px] mr-[0px] mb-[0px] overflow-hidden list-none">
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              Typescript
            </li>
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              React
            </li>
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              Node.js
            </li>
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              Java
            </li>
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              Wordpress
            </li>
            <li className="flex gap-3 items-center text-[16px] mb-[0.625rem]">
              <BsCaretRight className="fill-[#64ffda] text-[12px]" />
              Tailwind
            </li>
          </ul>
        </div>
        <div className="mt-[50px] mr-auto w-[70%] max-w-[300px] mx-auto [md:flex-2] md:mt-0 md:flex-1">
          <div className="relative">
            <div className="block max-w-[500px] after:w-full cursor-pointer after:h-full after:-z-10 rounded bg-[#64ffda] after:absolute after:left-[14px] after:top-[14px] after:rounded after:border-[2px] after:border-[#64ffda]">
              <img
                src={image}
                alt="user"
                className="z-50 block h-full p-0 max-w-full static w-full rounded grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
