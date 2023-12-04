import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState();
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] bg-[#252439] flex justify-center items-center text-gray-300 text-lg p-6 ">
      <div>
        <ul className="hidden md:flex justify-center items-center ">
          <li className="px-6 cursor-pointer ">Home</li>
          <li className="px-6 cursor-pointer ">About</li>
          <li className="px-6 cursor-pointer ">Portfolio</li>
          <li className="px-6 cursor-pointer ">Projects</li>
          <li className="px-6 cursor-pointer ">Contact</li>
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
