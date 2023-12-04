import React, { useState } from "react";
import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiIllustrator } from "react-icons/di";

const Portfolio = () => {
  const [selectedContent, setSelectedContent] = useState("skills");

  const handleTabClick = (content) => {
    setSelectedContent(content);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "skills":
        return (
          <div className="grid grid-cols-3 gap-8 mt-8 ml-6 leading-10 ">
            {/* Display content */}
            {[
              { icon: <FaHtml5 size={70} />, name: "HTML" },
              { icon: <FaCss3 size={70} />, name: "CSS" },
              { icon: <IoLogoJavascript size={70} />, name: "JS" },
              { icon: <FaReact size={70} />, name: "React" },
              { icon: <FaGithub size={70} />, name: "Github" },
              { icon: <DiIllustrator size={70} />, name: "Illustrator" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex flex-col items-center">
                  {item.icon}
                  <div className="mt-3">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case "education":
        const educationData = [
          {
            years: "2004 - 2017",
            name: "Kumuidini homes",
            spacing: "___",
            course: "School",
          },
          {
            years: "2017 - 2019",
            name: "Prativa ",
            spacing: "___",
            course: "Science",
          },
          {
            years: "2019 - Present",
            name: "IOE WRC",
            spacing: "___",
            course: "Computer Engineering",
          },
        ];
        return (
          <div className="grid grid-cols-2 gap-8 mt-8 ml-6 leading-8 ">
            {educationData.map((education, index) => (
              <div key={index}>
                <div className="ml-3 text-[#7953F8] ">{education.years}</div>
                <div className="ml-3 text-lg text-gray-400 ">
                  {education.name}
                </div>
                <div className="ml-3">{education.spacing}</div>
                <div className="ml-3 text-2xl font-bold">
                  {education.course}
                </div>
              </div>
            ))}
          </div>
        );

      case "experience":
        const expData = [
          {
            workingDate: "2019 - 2022",
            company: "GrowbyData Pvt Ltd",
            spacing: "___",
            jobTitle: "Cloud Analyst (Parttime)",
          },
          {
            workingDate: "2021 - 2022",
            company: "Talking Minds",
            spacing: "___",
            jobTitle: "Lead Designer",
          },
          {
            workingDate: "2021-2022",
            company: "Everest Technology",
            spacing: "___",
            jobTitle: "Web Developer",
          },
        ];
        return (
          <div className="grid grid-cols-2 gap-8 mt-8 ml-6 leading-8 ">
            {expData.map((exp, index) => (
              <div key={index}>
                <div className="ml-3 text-[#7953F8] ">{exp.workingDate}</div>
                <div className="ml-3 text-lg text-gray-400 ">{exp.company}</div>
                <div className="ml-3">{exp.spacing}</div>
                <div className="ml-3 text-2xl font-bold">{exp.jobTitle}</div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className=" bg-[#252439] text-white min-h-screen pt-[100px] "
      name="portfolio"
    >
      <div className="flex flex-col md:flex-row w-full mx-auto justify-center h-screen ">
        <div className="max-w-[1000px] grid md:grid-cols-2 gap-8 px-4  items-center">
          {/* First Column */}
          <div className="p-4 mx-auto">
            <div className="flex mb-10">
              <div className="text-6xl font-bold tracking-wide ">
                My expert areas
                <span className="border-b-2 w-20 "> </span>
              </div>
            </div>
            <div className="text-lg text-[#A8A6AF]">
              My tech odyssey has equipped me with expertise in cloud
              optimization, human-centered design, and web development. This
              unique blend allows me to seamlessly bridge the gap between
              technology and user experience, crafting solutions that are both
              technically sound and user-friendly. I am a tech evangelist ready
              to empower your endeavors.
              {/* <p className="mt-10">
                You can customize a template or make your own from scratch, with
                an immersive library at your disposal.
              </p> */}
            </div>
          </div>

          {/* Second Column */}
          <div className=" p-4 ">
            {/* Content Tabs */}
            <div className="flex justify-center pb-4 ">
              <button
                className={`mr-4 py-4 px-8 rounded-lg   ${
                  selectedContent === "skills"
                    ? "font-bold border-2 duration-100  "
                    : ""
                }`}
                onClick={() => handleTabClick("skills")}
              >
                Skills
              </button>
              <button
                className={`mr-4 py-4 px-8 rounded-lg ${
                  selectedContent === "education"
                    ? "font-bold border-2 duration-100 "
                    : ""
                }`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </button>
              <button
                className={`mr-4 py-4 px-8 rounded-lg ${
                  selectedContent === "experience"
                    ? "font-bold border-2 duration-100  "
                    : ""
                }`}
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </button>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
