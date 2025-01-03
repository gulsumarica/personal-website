import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useTheme } from "../context/ThemeContext";
import "./DarkMode.css";

function darkMode() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className="flex gap-4 justify-end ">
        <Form>
          <FormGroup
            switch
            className="position-relative d-flex align-items-center mt-4 mr-44"
          >
            <div
              className={`icon-wrapper ${isDarkMode ? "dark" : "light"}`}
              onClick={toggleDarkMode}
            >
              <Input
                type="switch"
                role="switch"
                id="darkModeSwitch"
                checked={isDarkMode}
                readOnly
                style={{ display: "none" }}
              />
              <div className="icon"></div>
            </div>
            <Label check htmlFor="darkModeSwitch" className="ms-2">
              {isDarkMode ? "LIGTH MODE" : "DARK MODE"}
            </Label>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default darkMode;
