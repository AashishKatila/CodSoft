import React, { useState } from "react";

const Portfolio = () => {
  const [selectedContent, setSelectedContent] = useState("skills");

  const handleTabClick = (content) => {
    setSelectedContent(content);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "skills":
        return (
          <div>
            {/* Display skills content */}
            <h2>Skills</h2>
            {/* Include your skills information here */}
          </div>
        );

      case "education":
        return (
          <div>
            {/* Display education content */}
            <h2>Education</h2>
            {/* Include your education information here */}
          </div>
        );

      case "experience":
        return (
          <div>
            {/* Display experience content */}
            <h2>Experience</h2>
            {/* Include your experience information here */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className=" bg-[#252439] text-white w-full ">
      <div className="flex max-w-[1080px] mx-auto pt-[100px] h-screen ">
        {/* First Column */}
        <div className="w-1/2 p-4 mx-auto">
          <div className="flex mb-10">
            <div className="text-6xl font-bold tracking-wide ">
              My expert areas
              <span className="border-b-2 w-20 "> </span>
              </div>
            
          </div>
          <div className="text-lg text-[#A8A6AF]">
            <p className="mt-10">
              You can express yourself however you want and whenever you want,
              for free. You can customize a template or make your own from
              scratch, with an immersive library at your disposal. You can
              express yourself however you want and whenever you free.
            </p>
            <p className="mt-10">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-1/2 p-4">
          {/* Content Tabs */}
          <div className="flex mb-4">
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

          {/* Render Content based on selected tab */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
