import React from "react";
import "./Gallery.css";

import ImgSmall from "./ImgSmall";
import ImgLarge from "./ImgLarge";

import mensMobile from "./images/mens-mobile.jpg";
import womensMobile from "./images/womens-mobile.jpg";
import accessoriesMobile from "./images/accessories-mobile.jpg";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="Gallery-wrapper">
        <ImgSmall category="Women's" imgSource={womensMobile} />
        <ImgSmall category="Men's" imgSource={mensMobile} />
      </div>
      <ImgLarge category="Accessories" imgSource={accessoriesMobile} />
    </div>
  );
}

export default Gallery;
