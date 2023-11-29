import React from "react";
import about from "../assets/about.png";
import { FaRegFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#6244C5] w-full h-screen  text-white ">
      <div className="max-w-[1080px] mx-auto  h-screen px-4 flex flex-col md:flex-row justify-center items-center ">
        {/* <div className="max-w-[1000px] mx-auto w-full grid sm:grid-cols-2 "> */}
          {/* Image  */}
          <div className="flex-1">
            <img
              src={about}
              alt="About Me"
              style={{ width: "400px", height: "500px" }}
            />
            {/* Image */}
          </div>
          <div className="flex-1 mx-2">
            <div className="flex">
            <h2 className="text-5xl  ">About Me </h2> <div className="border-b-2 border-white w-12 ml-2"></div>
            </div>
            <p className="mt-6 text-gray-300 text-lg leading-8  ">
              With 10 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I enjoy every step of the design process, from discussion
              and collaboration.
            </p>
            <div className="mt-6">
              {/* CV Button */}
            <button className="flex text-black  bg-[#ffffff] px-8 py-4 rounded-2xl items-center font-semibold ">Download CV <FaRegFileAlt className="ml-2" size={24} /></button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
