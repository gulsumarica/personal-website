import React from "react";
import MainHeroBg from "../assets/images/hero-bg.png";
import ProfilePicture from "../assets/images/Profil.jpeg";
import DarkMode from "./DarkMode.jsx";

import data from "../data.json";
function Main() {
  return (
    <div
      className="main-container m-0 p-0"
      style={{
        backgroundImage: `url(${MainHeroBg})`,
        backgroundSize: "cover",
      }}
    >
      <DarkMode />
      <div className="flex flex-row">
        <div className="flex flex-column justify-center">
          <h1>{data.title}</h1>
          <p className="text-white">{data.paragraph}</p>
        </div>
        <div className="w-60 h-60 rounded-md overflow-hidden mx-auto">
          <img src={ProfilePicture} alt="Gülsüm Arıca" />
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/gulsumarica"
          target="_blank"
          className="flex items-center px-4 py-2 bg-white text-[#4015b7] border rounded-md border-solid border-gray-900 no-underline	"
        >
          <i className="fa-brands fa-github" style={{ color: "#4015b7" }}>
            {" "}
          </i>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/g%C3%BCls%C3%BCm-ar%C4%B1ca-a11008175/"
          target="_blank"
          className="flex items-center px-4 py-2 bg-white text-[#4015b7] border rounded-md border-solid border-gray-900 no-underline	"
        >
          <i
            className="fa-brands fa-linkedin-in"
            style={{ color: "#4015b7" }}
          ></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Main;
