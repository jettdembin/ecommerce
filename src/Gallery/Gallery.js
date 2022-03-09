import React from "react";
import "./Gallery.css";

import { useMediaQuery } from 'react-responsive'

import ImgSmall from "./GalleryBlocks/ImgSmall";
import ImgLarge from "./GalleryBlocks/ImgLarge";

import mensMobile from "../images/mens-mobile.jpg";
import womensMobile from "../images/womens-mobile.jpg";
import accessoriesMobile from "../images/accessories-mobile.jpg";

import accessoriesDesktop from "../images/accessories-desktop.jpg";

function Gallery() {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 800px)",
  });

  return (
    <div className="Gallery">
      {checkIfMediumPlus ? 
      <>
        <div className="Gallery-wrapper">
          <ImgSmall category="Women's" imgSource={womensMobile} />
          <ImgSmall category="Men's" imgSource={mensMobile} />
          <ImgSmall category="Accessories" imgSource={accessoriesDesktop} />
        </div>
      </>
      : 
      <>
        <div className="Gallery-wrapper">
          <ImgSmall category="Women's" imgSource={womensMobile} />
          <ImgSmall category="Men's" imgSource={mensMobile} />
        </div>
        <ImgLarge category="Accessories" imgSource={accessoriesMobile} />
      </>}
    </div>
  );
}

export default Gallery;
