import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import note from "../assets/note.png";
import movieland from "../assets/movieland.png";
import pokemon from "../assets/pokemon.png";
import weather from "../assets/weather.png";

const projectsList = [
  {
    image: note,
    link: "https://example.com/project1",
    name: "Notes",
  },
  {
    image: movieland,
    link: "https://example.com/project2",
    name: "Movieland",
  },
  {
    image: pokemon,
    link: "https://example.com/project3",
    name: "Pokemon",
  },
  {
    image: weather,
    link: "https://example.com/project4",
    name: "Weather",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#FFC448] pt-1 ">
      <div className="flex flex-col px-4 h-screen max-w-[1080px] mx-auto justify-center ">
        <div className=" text-5xl  font-semibold my-8 ">
          Look at my
          <br />
          recent projects ___
        </div>
        <Slider {...settings} className="mt-4 ">
          {projectsList.map((project, index) => (
            <div key={index} className="mb-2 text-center ">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline "
              >
                {project.name}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
