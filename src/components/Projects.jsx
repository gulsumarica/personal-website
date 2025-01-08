import React from "react";
import ProjectBg from "../assets/projects-bg.png";
import data from "../data/dataEng.json";

function Projects() {
  return (
    <div
      className="mx-auto p-4"
      style={{
        backgroundImage: `url(${ProjectBg})`,
      }}
    >
      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-3xl font-semibold text-center mb-6">
          {data.projects.projectsH}
        </h1>
        {data.projects.projectList.map((project) => (
          <div
            key={project.id}
            className="flex flex-row md:flex-row bg-white border-slate-800 border shadow-lg rounded-full overflow-hidden mb-6 w-10 h-10"
          >
            <div>
              <img
                src={project.img}
                alt={project.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-4 flex flex-col items-start justify-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {project.heading}
              </h2>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <ul className="flex items-start gap-2 pl-5 text-white">
                {project.teknologies.map((tech, index) => (
                  <li
                    key={index}
                    className="border rounded-full bg-[#4731D3] p-2 flex items-start justify-center w-16 h-16"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 ">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  View Site
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
