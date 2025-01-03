import React, { useState } from "react";
import MainHeroBg from "../../public/assets/images/hero-bg.png";
import ProfilePicture from "../../public/assets/images/Profil.jpeg";
import DarkMode from "./DarkMode.jsx";
import dataEng from "../data/dataEng.json";
import dataTr from "../data/dataTr.json";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function Hero() {
  const [language, setLanguage] = useState("en");
  const data = language == "en" ? dataEng : dataTr;

  return (
    <div
      className={"main-container w-screen h-screen "}
      style={{
        backgroundImage: `url(${MainHeroBg})`,
      }}
    >
      <div className="flex justify-end items-center mr-44">
        <LanguageSwitcher setLanguage={setLanguage} />
        <DarkMode />
      </div>

      <h1 className="flex justify-start ml-72 mt-10">Gülsüm</h1>

      <div className="flex flex-row text-center">
        <div className="flex flex-column justify-center items-end text-right mt-44 pr-0 mr-0">
          <p className="text-[#4731D3]	text-6xl mx-0 px-0 w-8/12 text-left font-medium">
            {data.hero.heroTitle}
          </p>
          <p className="text-white w-8/12 text-2xl text-left">
            {data.hero.heroDesc}
          </p>
        </div>
        <div className="  w-80 h-80 rounded-xl overflow-hidden text-left mt-40">
          <img src={ProfilePicture} alt="Gülsüm Arıca" />
        </div>
      </div>
      <div className="flex space-x-4 ml-72">
        <a
          href={data.hero.githubLink}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white text-[#4015b7] border rounded-md border-solid border-gray-900 no-underline	"
        >
          <i className="fa-brands fa-github" style={{ color: "#4015b7" }}></i>
          GitHub
        </a>
        <a
          href={data.hero.linkedinLink}
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

export default Hero;
