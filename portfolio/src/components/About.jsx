import React from "react";
import about from "../assets/about.png";
import { FaRegFileAlt } from "react-icons/fa";
import CV from "../assets/CV.pdf";


const About = () => {
  return (
    <div className="bg-[#6244C5] min-h-screen pt-[120px] " name="about">
      <div className="flex flex-col md:flex-row  justify-center w-full h-screen ">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 items-center">
          {/* 1st col  */}
          <div className="m-20 md:m-10 ">
            <img src={about} className=" my-0 mx-auto " alt="Home" />
          </div>

          {/* 2nd col  */}
          <div className="flex-1 mx-2">
            <div className="flex">
              <h2 className="text-5xl text-white ">About Me </h2>{" "}
              <div className="border-b-2 border-white w-12 ml-2"></div>
            </div>
            <p className="mt-6 text-gray-300 text-lg leading-8  ">
              My tech journey began with 3 years as a part-time Cloud Analyst at
              GrowbyData, keeping their cloud humming. Then, I switched gears,
              leading design at Talking Minds where I learned to balance tech
              with human-centered design. Finally, at Everest Technology, I
              embraced web development, translating designs into reality. Now,
              I'm a blend of tech, design, and collaboration, ready to make an
              impact.
            </p>
            <div className="mt-6">
              {/* CV Button */}
              <a download href={CV} > 
              <button  className="flex text-black  bg-[#ffffff] px-8 py-4 rounded-2xl items-center font-semibold   ">
                
                Download CV <FaRegFileAlt className="ml-2" size={24} />
              </button>
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
