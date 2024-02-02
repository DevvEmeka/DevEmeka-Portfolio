import React, { useEffect, useState } from "react";
import About from "./About";
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import Project from "./Project";
import OtherProjects from "./OtherProjects";

const Home = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleChildData = () => {
    if (true) {
      setIsBlurred(!isBlurred);
      console.log("use effect worked");
    }
  };

  // transition-all duration-300

  return (
    <section className="md:text-[20px] bg-[#0a192f] md:bg-[#0a192f]">
      <div
        className={`pt-[130px] md:pt-[150px] md:px-[9rem] px-[25px] max-w-7xl mx-auto ${
          isBlurred ? "blur-[5.5px] bg-[#0a192f]" : "bg-[#0a192f]"
        }`}
      >
        <div>
          <h1 className="mb-[20px] ml-[2px] text-[#64ffda] text-[clamp(18px,5vw,18px)] [word-spacing:3px] tracking-[0.095em] font-calibre font-light">
            Hi, my name is
          </h1>
        </div>
        <div>
          <h2 className="text-[clamp(33px,8vw,80px)] m-[0px]">Abuba Emeka.</h2>
        </div>
        <div>
          <h3 className="text-[clamp(33px,8vw,70px)] m-[0px] mt-[0.6125rem] text-[#8892b0] leading-[1]">
            I build things for the web.
          </h3>
        </div>
        <div>
          <p className="mt-[1.45rem] max-w-[33.75rem] text-[18px] text-[#8892b0] font-calibre">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <div>
          <button className='text-[#64ffda] bg-transparent rounded font-SF mt-[3.125rem] border-[#64ffda] border border-solid px-[1.75rem] py-[1.2rem] text-["word-spacing:5em"] text-[1rem] leading-[1] cursor-pointer tracking-[0.095em] [word-spacing:-0.1px]'>
            Check out my articles!
          </button>
        </div>
        <About />
        <Project />
        <OtherProjects />
        <Contact />
      </div>
      <NavBar handleChildData={handleChildData} />
      {/* md:text-[51px] */}
      {/* md:text-[clamp(40px,8vw,80px)] */}
    </section>
  );
};

export default Home;
