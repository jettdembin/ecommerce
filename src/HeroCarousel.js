import React from "react";
import "./HeroCarousel.css";

import { Carousel } from "react-responsive-carousel";

import hero1 from "./images/hero-1-mobile.jpg";
import hero2 from "./images/hero-2-mobile.jpg";
import hero3 from "./images/hero-3-mobile.jpg";

function HeroCarousel() {
  return (
    <Carousel
      className="HeroCarousel-main-slide"
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
    >
      <div>
        <img src={hero1} height="277px" />
      </div>
      <div>
        <img src={hero2} height="277px" />
      </div>
      <div>
        <img src={hero3} height="277px" />
      </div>
    </Carousel>
  );
}

export default HeroCarousel;
