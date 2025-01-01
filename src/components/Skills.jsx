import React from "react";
import data from "../data.json";
import JsLogo from "../assets/images/js-logo.png";
import ReactLogo from "../assets/images/React-logo.png";
import ReduxLogo from "../assets/images/Redux-logo.png";
import NodeLogo from "../assets/images/node-logo.png";
import VSCodeLogo from "../assets/images/VS-Code-logo.png";
import FigmaLogo from "../assets/images/figma-logo.png";

function Skills() {
  return (
    <div className="flex flex-row gap-0 items-center">
      <h1 className="text-blue-500 ">Skills</h1>
      <div className="flex flex-row ml-52 gap-y-0 my-0">
        <div className="flex flex-column gap-0 p-0">
          <div className="flex items-center mr-4">
            <img src={JsLogo} alt="Js-Logo" className="mr-2" />
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="flex items-center mr-4">
            <img src={ReactLogo} alt="React-Logo" className="mr-2" />
            <h2>REACT</h2>
          </div>
          <div className="flex items-center mr-4">
            <img src={ReduxLogo} alt="Redux-Logo" className="mr-2" />
            <h2>REDUX</h2>
          </div>
        </div>
        <div className="flex flex-column p-1">
          <div className="flex items-center mr-4">
            <img src={NodeLogo} alt="Node-Logo" className="mr-2" />
            <h2>NODE</h2>
          </div>
          <div className="flex items-center mr-4">
            <img src={VSCodeLogo} alt="VS-Code-Logo" className="mr-2" />
            <h2>VS CODE</h2>
          </div>
          <div className="flex items-center mr-4">
            <img src={FigmaLogo} alt="Figma-Logo" className="mr-2" />
            <h2>FIGMA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
