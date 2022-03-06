import React from "react";
import "./Footer.css";

import * as mui from "./mui";

import LinkCategory from "./LinkCategory";

function Footer() {
  return (
    <div className="Footer">
      <LinkCategory linkCategory="Customer Service" />
      <LinkCategory linkCategory="Company" />
      <div className="Footer-socials-cntr">
        <h1 className="Footer-socials-header">Follow Us</h1>
        <div className="Footer-socials">
          <mui.FacebookIcon className="Footer-social-icon" />
          <mui.InstagramIcon className="Footer-social-icon" />
          <mui.Twitter className="Footer-social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
