import React from "react";
import "./ImgLarge.css";

import Category from "./CategoryTitle/Category";

function ImgLarge(props) {
  return (
    <div className="ImgLarge">
      <img src={props.imgSource} alt={props.category} width="100%" />
      <Category category={props.category} />
    </div>
  );
}

export default ImgLarge;
