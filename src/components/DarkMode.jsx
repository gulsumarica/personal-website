import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./DarkMode.css";
import data from "../data.json";

function darkMode() {
  const [darkMode, setDarkMode] = useState();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className="container flex gap-4 justify-end ">
        <div className="mt-4 text-white">TÜRKÇE'YE GEÇ</div>
        <Form>
          <FormGroup
            switch
            className="position-relative d-flex align-items-center mt-4 mr-44"
          >
            <div
              className={`icon-wrapper ${darkMode ? "dark" : "light"}`}
              onClick={toggleDarkMode}
            >
              <Input
                type="switch"
                role="switch"
                id="darkModeSwitch"
                checked={darkMode}
                readOnly
                style={{ display: "none" }}
              />
              <div className="icon"></div>
            </div>
            <Label check htmlFor="darkModeSwitch" className="ms-2">
              {darkMode ? "LIGTH MODE" : "DARK MODE"}
            </Label>
          </FormGroup>
        </Form>
      </div>
      <h2 className="flex justify-start ml-72 mt-10 text-green-200">
        {data.name}
      </h2>
    </>
  );
}

export default darkMode;
