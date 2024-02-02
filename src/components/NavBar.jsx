import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavBar = ({ handleChildData }) => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    handleChildData();
  };
  return (
    <header>
      <header className="fixed pointer-events-auto select-auto top-0 w-full z-40 bg-[#0a192fd9] backdrop-blur-[10px] filter-none">
        <div className="flex justify-between text-[#ccd6f6] w-full items-center py-[1.5rem] md:pt-[2.4rem] px-[25px] md:px-[3.125rem] font-mono">
          <div>
            <span
              className="uppercase font-baloo text-[#64ffda] md:text-[2.1rem] text-[1.8rem] tracking-[-0.034em] [word-spacing:-10px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              dev emeka
            </span>
          </div>
          <nav>
            <ul className="md:flex flex-col md:flex-row items-center space-x-8 hidden">
              <li
                className="text-[#ccd6f6] text-[0.8125rem] cursor-pointer"
                onClick={() => navigate("/about")}
              >
                <span className="text-[#64ffda] mr-2">01.</span>About
              </li>
              <li
                className="text-[#ccd6f6] text-[0.8125rem] cursor-pointer"
                onClick={() => navigate("/project")}
              >
                <span className="text-[#64ffda] mr-2">02.</span>Project
              </li>
              <li
                className="text-[#ccd6f6] text-[0.8125rem] cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <span className="text-[#64ffda] mr-2">03.</span>Contact
              </li>
              <li
                className="text-[#ccd6f6] text-[0.8125rem] cursor-pointer"
                onClick={() => navigate("/blog")}
              >
                <span className="text-[#64ffda] mr-2">04.</span>Blog
              </li>
              <li className="text-[#64ffda] text-[0.8125rem] border border-[#64ffda] px-[1rem] py-[0.57rem] cursor-pointer rounded">
                Resume
              </li>
            </ul>
            <div
              onClick={handleNav}
              className="text-[#64ffda] text-[2.1rem] z-10 block md:hidden ease-out"
            >
              {nav ? <LiaTimesSolid /> : <CiMenuFries />}
            </div>
            <div
              className={
                !nav
                  ? "fixed right-[-100%] ease-out duration-500"
                  : "fixed top-0 right-0 w-[74%] h-full -z-10 ease-in-out duration-500"
              }
            >
              <ul className="pt-36 flex flex-col items-center w-full text-[#ccd6f6] font-mono bg-[#112240] h-screen">
                <li
                  className="flex flex-col items-center justify-center p-4"
                  onClick={() => navigate("/about")}
                >
                  <div className="text-[#64ffda] text-[0.875rem] mb-1">01.</div>
                  <p className="cursor-pointer text-[0.875rem]">About</p>
                </li>
                <li
                  className="flex flex-col items-center justify-center p-4"
                  onClick={() => navigate("/project")}
                >
                  <div className="text-[#64ffda] text-[0.875rem] mb-1">02.</div>
                  <p className="cursor-pointer text-[0.875rem]">Project</p>
                </li>
                <li
                  className="flex flex-col items-center justify-center p-4"
                  onClick={() => navigate("/contact")}
                >
                  <div className="text-[#64ffda] text-[0.875rem] mb-1">03.</div>
                  <p className="cursor-pointer text-[0.875rem]">Contact</p>
                </li>
                <li
                  className="flex flex-col items-center justify-center p-4"
                  onClick={() => navigate("/blog")}
                >
                  <div className="text-[#64ffda] text-[0.875rem] mb-1">04.</div>
                  <p className="cursor-pointer text-[0.875rem]">Blog</p>
                </li>
                <button className="mb-20 mt-10 text-[#64ffda] border border-[#64ffda] px-12 py-4 cursor-pointer rounded">
                  Resume
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </header>
  );
};

export default NavBar;
