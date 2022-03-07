import React, { useState } from "react";
import "./LinkCategory.css";

import * as mui from "./mui";

function LinkCategory(props) {
  const [isExpanded, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isExpanded);
  };

  return (
    <div className="LinkCategory">
      <div className="LinkCategory-header-cntr">
        {isExpanded ? (
          <>
            <div className="LinkCategory-header-wrapper">
              <h1 className="LinkCategory-header">{props.linkCategory}</h1>
              <mui.RemoveIcon
                className="LinkCategory-icon"
                onClick={toggleMenu}
              />
            </div>
            <div>
              <ul className="LinkCategory-link-cntr">
                <li className="LinkCategory-link">Accessibility</li>
                <li className="LinkCategory-link">Contact Us</li>
                <li className="LinkCategory-link">Return Policy</li>
                <li className="LinkCategory-link">FAQ</li>
                <li className="LinkCategory-link">Gift Certificates</li>
                <li className="LinkCategory-link">Wishlist</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="LinkCategory-header-wrapper">
            <h1 className="LinkCategory-header">{props.linkCategory}</h1>
            <mui.Add className="LinkCategory-icon" onClick={toggleMenu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LinkCategory;
