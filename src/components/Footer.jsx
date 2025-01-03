import React from "react";
import TwitterIcon from "../../public/assets/images/twitter.png";
import CodePenIcon from "../../public/assets/images/codepen.png";
import atIcon from "../../public/assets/images/at-sign.png";
import InstagramIcon from "../../public/assets/images/instagram.png";
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
