import React from "react";
import "./LinkCategory.css";

import * as mui from "./mui";

function LinkCategory(props) {
  return (
    <div className="LinkCategory">
      <div className="LinkCategory-header-cntr">
        <h1 className="LinkCategory-header">{props.linkCategory}</h1>
        <mui.RemoveIcon className="LinkCategory-icon" />
      </div>
      <ul className="LinkCategory-link-cntr">
        <li className="LinkCategory-link">Accessibility</li>
        <li className="LinkCategory-link">Contact Us</li>
        <li className="LinkCategory-link">Return Policy</li>
        <li className="LinkCategory-link">FAQ</li>
        <li className="LinkCategory-link">Gift Certificates</li>
        <li className="LinkCategory-link">Wishlist</li>
      </ul>
    </div>
  );
}

export default LinkCategory;
