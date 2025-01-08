import React from "react";
import TwitterIcon from "../assets/twitter.png";
import CodePenIcon from "../assets/codepen.png";
import atIcon from "../assets/at-sign.png";
import InstagramIcon from "../assets/instagram.png";
import data from "../data/dataEng.json";
function Footer() {
  return (
    <div className="flex flex-col items-center w-screen">
      <h2>{data.footer.heading1}</h2>
      <p>{data.footer.heading2}</p>
      <p className="underline underline-offset-8 text-sky-600	">
        {data.footer.email}
      </p>
      <div className="flex items-center gap-4">
        <img src={TwitterIcon} alt="" />
        <img src={CodePenIcon} alt="" />
        <img src={atIcon} alt="" />
        <img src={InstagramIcon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
