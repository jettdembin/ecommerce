import React from "react";
import "./Subscribe.css";
import { EmailIcon } from "./mui/index";

function Subscribe() {
  return (
    <div className="Subscribe">
      <div>
        <h2 className="Subscribe-header">
          <EmailIcon />
          Sign Up and Stay Connected
        </h2>
        <p className="Subscribe-info">
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
      </div>
      <button className="Subscribe-btn">SUBSCRIBE</button>
    </div>
  );
}

export default Subscribe;
