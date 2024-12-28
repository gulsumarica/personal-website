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
      <div className="container mt-3 d-flex gap-4 justify-content-end align-items-center">
        <div>TÜRKÇE'YE GEÇ</div>
        <Form>
          <FormGroup
            switch
            className="position-relative d-flex align-items-center"
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
              {/* İkon alanı */}
              <div className="icon"></div>
            </div>
            <Label check htmlFor="darkModeSwitch" className="ms-2">
              DARK MODE
            </Label>
          </FormGroup>
        </Form>
      </div>
      <h2 className="text-start text-customGreen">{data.name}</h2>
    </>
  );
}

export default darkMode;
