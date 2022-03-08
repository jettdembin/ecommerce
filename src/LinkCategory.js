import React, { useState } from "react";
import "./LinkCategory.css";

import * as mui from "./mui";

import { useMediaQuery } from "react-responsive";

function LinkCategory(props) {
  const [isExpanded, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isExpanded);
  };

  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 480px)",
  });

  return (
    <div className="LinkCategory">
      {checkIfMediumPlus ? 
      <div className="LinkCategory-header-cntr">
        <div className="LinkCategory-header-wrapper">
          <h1 className="LinkCategory-header">{props.linkCategory}</h1>
        </div>
        <div>
          <ul className="LinkCategory-link-cntr">
          {props.links.map(link => (
            <>
              <li className="LinkCategory-link">{link}</li>
            </>
          ))}
          </ul>
        </div>
      </div>
      :
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
              {props.links.map(link => (
                <>
                  <li className="LinkCategory-link">{link}</li>
                </>
              ))}
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
      }
    </div>
  );
}

export default LinkCategory;
