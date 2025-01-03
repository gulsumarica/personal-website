import React, { createContext, useContext, useState, useEffect } from "react";
import dataEn from "../data/dataEng.json";
import dataTr from "../data/dataTr.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [data, setData] = useState(dataEn);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (language === "tr") {
      setData(dataTr);
    } else {
      setData(dataEn);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, data, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
