import React, { useState } from "react";
import JsLogo from "../../public/assets/images/js-logo.png";
import ReactLogo from "../../public/assets/images/react-logo.png";
import ReduxLogo from "../../public/assets/images/Redux-logo.png";
import NodeLogo from "../../public/assets/images/node-logo.png";
import VSCodeLogo from "../../public/assets/images/VS-Code-logo.png";
import FigmaLogo from "../../public/assets/images/figma-logo.png";

function Skills() {
  return (
    <div className="flex h-full justify-center m-4 ">
      <h1 className="text-[#4832D3] text-5xl font-bold mt-24	">Skills</h1>
      <div className="flex m-4 p-4 gap-4 items-end">
        <div className="flex flex-col ">
          <div className="flex items-center ">
            <img src={JsLogo} alt="Js-Logo" className="mr-2 w-32 h-32 m-4" />
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="flex items-center mr-4">
            <img
              src={ReactLogo}
              alt="React-Logo"
              className="mr-2 w-32 h-32 m-4"
            />
            <h2>REACT</h2>
          </div>
          <div className="flex items-center mr-4">
            <img
              src={ReduxLogo}
              alt="Redux-Logo"
              className="mr-2 w-32 h-32 m-4"
            />
            <h2>REDUX</h2>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center mr-4">
            <img
              src={NodeLogo}
              alt="Node-Logo"
              className="mr-2 w-32 h-32 m-4"
            />
            <h2>NODE</h2>
          </div>
          <div className="flex items-center mr-4">
            <img
              src={VSCodeLogo}
              alt="VS-Code-Logo"
              className="mr-2 w-32 h-32 m-4"
            />
            <h2>VS CODE</h2>
          </div>
          <div className="flex items-center mr-4">
            <img
              src={FigmaLogo}
              alt="Figma-Logo"
              className="mr-2 w-32 h-32 m-4"
            />
            <h2>FIGMA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
