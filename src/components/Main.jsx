import React from "react";
import MainHeroBg from "../assets/images/hero-bg.png";
import ProfilePicture from "../assets/images/Profil.jpeg";
import DarkMode from "./DarkMode.jsx";

import data from "../data.json";
function Main() {
  return (
    <div
      className="main-container w-screen h-screen "
      style={{
        backgroundImage: `url(${MainHeroBg})`,
      }}
    >
      <DarkMode />
      <div className="flex flex-row text-center">
        <div className="flex flex-column justify-center items-end text-right mt-44 pr-0 mr-0">
          <p className="text-green-200	text-6xl mx-0 px-0 w-8/12 text-left font-medium">
            {data.title}
          </p>
          <p className="text-white w-8/12 text-2xl text-left">
            {data.paragraph}
          </p>
        </div>
        <div className="  w-80 h-80 rounded-xl overflow-hidden text-left mt-40">
          <img src={ProfilePicture} alt="Gülsüm Arıca" />
        </div>
      </div>
      <div className="flex space-x-4 ml-72">
        <a
          href="https://github.com/gulsumarica"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#4015b7] border rounded-md border-solid border-gray-900 no-underline	"
        >
          <i className="fa-brands fa-github" style={{ color: "#4015b7" }}></i>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/g%C3%BCls%C3%BCm-ar%C4%B1ca-a11008175/"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#4015b7] border rounded-md border-solid border-gray-900 no-underline	"
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
