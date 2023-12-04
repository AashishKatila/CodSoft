import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState();
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] bg-[#252439] flex justify-center items-center text-gray-300 text-lg p-6 ">
      <div>
        <ul className="hidden md:flex justify-center items-center ">
          <li className="px-6 cursor-pointer ">
            <Link to="home" smooth={true} duration={700}>
              Home
            </Link>
          </li>
          <li className="px-6 cursor-pointer ">
            <Link to="about" smooth={true} duration={700}>
              About
            </Link>
          </li>
          <li className="px-6 cursor-pointer ">
            <Link to="portfolio" smooth={true} duration={700}>
              Portfolio
            </Link>
          </li>
          <li className="px-6 cursor-pointer ">
            <Link to="projects" smooth={true} duration={700}>
              Projects
            </Link>
          </li>
          <li className="px-6 cursor-pointer ">
            <Link to="contact" smooth={true} duration={700}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10 inline-block">
        {!nav ? <GiHamburgerMenu /> : <FaTimes />}
      </div>

      {/* Mobile menu  */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-12 left-0 w-full bg-[#252439] flex  flex-col justify-center items-center "
          }
        >
          <li className="pt-1 cursor-pointer ">Home</li>
          <li className=" cursor-pointer ">About</li>
          <li className=" cursor-pointer ">Skills</li>
          <li className=" cursor-pointer ">Portfolio</li>
          <li className=" cursor-pointer ">Contact</li>
        </ul>
      </div>
    </div>
    //Mobile
  );
};

export default Navbar;
