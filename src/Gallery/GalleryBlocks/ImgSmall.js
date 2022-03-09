import React from "react";
import "./ImgSmall.css";

import Category from "./CategoryTitle/Category";

function ImgSmall(props) {
  return (
    <div className="ImgSmall">
      <img
        src={props.imgSource}
        alt={props.category}
        width="100%"
      />
      <Category category={props.category} />
    </div>
  );
}

export default ImgSmall;
