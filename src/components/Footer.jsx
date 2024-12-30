import React from "react";
import TwitterIcon from "../assets/images/twitter 1.png";
import CodePenIcon from "../assets/images/codepen 1.png";
import atIcon from "../assets/images/at-sign 1.png";
import InstagramIcon from "../assets/images/instagram 1.png";

function Footer() {
  return (
    <div>
      <h2>Send me a message!</h2>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <p>gulsumarica.biz@gmail.com</p>
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
