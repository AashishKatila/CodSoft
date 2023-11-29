import React from "react";
import landing from "../assets/landing.png";
import { FaFacebook, FaGithub, FaLinkedin,FaRegPaperPlane  } from "react-icons/fa";
import '../App.css'

const Home = () => {
  return (
    <div className="bg-[#252439] w-full text-white ">
      <div className="max-w-[1080px] mx-auto pt-[100px] h-screen px-4 flex flex-col md:flex-row justify-center items-center">
        
        <div className=" flex flex-col flex-1 mb-5 ">
          <h1 className=" text-6xl">Aashish Katila</h1>
          <div className="text-3xl mt-4">
            <span className="mr-4">-----</span>
            Web Designer
          </div>

          <p className="mt-4 text-lg text-gray-300">
            I'm creative web designer based in Pokhara, and I'm very passionate
            and dedicated to my work.
          </p>

          {/* buttons */}
          <div className="flex mt-8">
            <button className="flex justify-center items-center mx-2 rounded-xl bg-[#6244C5] p-4 transition-colors duration-500 ease-in-out hover:bg-white hover:text-black ">
              Buy Me a Coffee <FaRegPaperPlane  className="mx-2" />
            </button>
            <button className="mx-6 custom-btn">My Works</button>
          </div>

          {/* Social Icons  */}
          <div className="flex items-center mt-20">
            <p className="text-lg text-gray-300">Follow me :</p>
            <ul className="flex mx-1">
              <li className="mx-2">
                <FaLinkedin size={26} />
              </li>
              <li className="mx-2">
                <FaFacebook size={26} />
              </li>
              <li className="mx-2">
                <FaGithub size={26} />
              </li>
            </ul>
          </div>
        </div>

        {/* Image  */}
        <div className="flex flex-1 py-6 ">
          <img src={landing} className="px-10" alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
