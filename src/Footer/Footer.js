import React from "react";
import "./Footer.css";

import * as mui from "../mui/index";

import LinkCategory from "./FooterLinks/LinkCategory";

import { useMediaQuery } from "react-responsive";

function Footer() {
  const links1 = ["Accessibility", "Contact Us", "Return Policy", "FAQ", "Gift Certificates", "Wishlist"];
  const links2 = ["About Us", "Careers", "Press", "Affiliations"];

  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <div className="Footer">
      {checkIfMediumPlus ? 
      <div className="Footer-desktop-cntr">
        <div className="Footer-desktop-link-cntr">
          <LinkCategory linkCategory="Customer Service" links={links1} />
          <LinkCategory linkCategory="Company" links={links2}/>
        </div>
        <div className="Footer-socials-cntr">
          <h1 className="Footer-socials-header">Follow Us</h1>
          <div className="Footer-socials">
            <mui.FacebookIcon className="Footer-social-icon" />
            <mui.InstagramIcon className="Footer-social-icon" />
          </div>
        </div>
      </div>
      :
      <>
      <LinkCategory linkCategory="Customer Service" links={links1} />
      <LinkCategory linkCategory="Company" links={links2} />
      <div className="Footer-socials-cntr">
        <h1 className="Footer-socials-header">Follow Us</h1>
        <div className="Footer-socials">
          <mui.FacebookIcon className="Footer-social-icon" />
          <mui.InstagramIcon className="Footer-social-icon" />
          <mui.Twitter className="Footer-social-icon" />
        </div>
      </div>
      </>
      }
    </div>
  );
}

export default Footer;
