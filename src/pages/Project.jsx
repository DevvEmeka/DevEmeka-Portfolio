import React from "react";
import image from "../assets/IMG_6621.jpg";
import { RiGithubLine } from "react-icons/ri";
import { BsBoxArrowUpRight, BsFolder } from "react-icons/bs";

function Project() {
  return (
    <section className="py-[60px] md:py-[99px] px-[25px] mx-auto max-w-[60rem]">
      <div className="after:border-t after:border-[#233554] after:w-full after:border-[1px] after:-mt-[26px] after:h-[1px] md:after:ml-[00022px] md:max-w-[45rem] after:ml-[10px] flex items-center">
        {" "}
        <h2 className="flex items-center text-[clamp(20px,5vw,32px)] whitespace-nowrap w-full mr-0 mb-10 mt-[0.625rem] font-mono">
          {" "}
          <span className="text-[#64ffda] text-[clamp(15px,3vw,20px)] bottom-1 mr-[0.625rem] font-normal">
            02. {" "}
          </span>
          Some Things I've Built {" "}
        </h2>
      </div>
      <ul className="list-none p-0 m-0">
        <li className="relative mb-[100px] md:flex-row">
          <div>
            <img
              src={image}
              alt="project"
              className="relative z-0 shadow-xl w-full max-w-[31rem] md:h-[19rem] h-[25rem]"
            />
          </div>
          <div className="absolute z-10 border border-gray-100 md:pl-[0px] md:pb-[20px] md:pt-[3px] py-[22px] px-[8px] pb-[20px] md:-mt-[304px] -mt-[400px] max-w-[509px] md:ml-[450px] h-[19rem] mx-2">
            <h3 className="my-[10px] text-[#64ffda] font-mono text-[0.8125rem] font-medium md:font-normal flex md:justify-end">
              Featured Project
            </h3>
            <h3 className="text-[#ccd6f6] text-[clamp(24px,1vw,28px)] flex md:justify-end mb-[20px]">
              Halcolyn Theme
            </h3>
            <p className="md:mt-8 mt-[30px] flex justify-start text-left md:justify-end md:text-right md:p-6 font-mono md:text-[#a8b2b1] text-[1rem] md:text-[0.9375rem] rounded md:bg-[#112240]">
              A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed 
              audio information about each track. 
            </p>
            <ul className="mt-[25px] flex justify-start md:justify-end md:mt-[25px] md:mb-[10px] p-[0px] leading-3 flex-wrap">
              <li className="mb-[5px] ml-[0px] md:ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                Vs Code
              </li>
              <li className="b-[5px] ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                Sublime
              </li>
              <li className="b-[5px] ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                Text
              </li>
              <li className="b-[5px] ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                Atom
              </li>
              <li className="b-[5px] ml-[0px] md:ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                iTerm2
              </li>
              <li className="b-[5px] ml-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">
                Hyper
              </li>
            </ul>
            <div className="flex gap-[17px] -ml-1 items-center justify-start mt-[20px] md:mt-[10px] md:justify-end text-[#ccd6f6]">
              <RiGithubLine className="h-[23px] w-[23px] md:h-[20px] md:w-[20px] hover:cursor-pointer" />
              <BsBoxArrowUpRight className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] hover:cursor-pointer" />
            </div>
          </div>
        </li>
        <li>
        <div className="md:flex-row mt-[7rem] mb-[10.3rem]">
             <div className="border absolute z-10 border-gray-100 p-4 -mt-[1px] mr-[30px] px-2 py-4 max-w-[499px] h-[19rem] mx-2">
               <p className="my-[10px] text-[#64ffda] font-mono text-[0.8125rem] font-normal flex md:justify-start">
                 Featured Project
               </p>
               <h3 className="text-[#ccd6f6] text-[clamp(24px,1vw,28px)] flex md:justify-start mb-[20px]">
                 Halcolyn Theme
               </h3>
               <p className="mt-8 flex justify-start text-left md:justify-start md:text-left md:p-6 font-mono md:text-[#a8b2b1] text-[1rem] md:text-[0.9375rem] rounded md:bg-[#112240]">
                 A minimal, dark blue theme for VS Code, Sublime, Atom, iTem, and
                 more.
               </p>
               <ul className="mt-8 flex md:justify-start md:mt-[25px] md:mb-[10px] p-[0px] leading-3 flex-wrap">
                 <li className="mb-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">Vs Code</li>
                 <li className="b-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">Sublime</li>
                 <li className="b-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">Text</li>
                 <li className="b-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">Atom</li>
                 <li className="b-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">iTerm2</li>
                 <li className="b-[5px] mr-[18px] text-[#a8b2d1] font-mono text-[0.9375rem] whitespace-nowrap">Hyper</li>
               </ul>
               <div className="flex gap-[15px] -ml-1 items-center md:mt-[22px] mt-[25px] md:justify-start text-[#ccd6f6]">
                 <RiGithubLine className="h-[23px] w-[23px] md:h-[20px] md:w-[20px] hover:cursor-pointer" />
                 <BsBoxArrowUpRight className="h-[19px] w-[19px] md:h-[20px] md:w-[20px] hover:cursor-pointer" />
               </div>
             </div>
             <img
               src={image}
               alt="project"
               className="md:ml-[402px] z-0 relative shadow-xl w-full max-w-[31rem] h-[19rem]"
             />
           </div>
        </li>
      </ul>
    </section>
  );
}

export default Project;
