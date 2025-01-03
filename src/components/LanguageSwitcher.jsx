import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({ setLanguage }) => {
  const { language, switchLanguage } = useLanguage();
  const handleLanguageSwitch = () => {
    if (language === "en") {
      switchLanguage("tr");
    } else {
      switchLanguage("en");
    }
  };
  return (
    <div onClick={handleLanguageSwitch} className="flex mt-4 items-center">
      {language === "en" ? (
        <div onClick={() => setLanguage("tr")} className=" text-xl text-white">
          <span className="font-semibold text-[#CBF281] hover:underline">
            Türkçe
          </span>
          'ye Geç
        </div>
      ) : (
        <div onClick={() => setLanguage("en")} className="text-xl text-white">
          Switch to
          <span className="font-semibold text-[#CBF281] hover:underline">
            {" "}
            English
          </span>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
