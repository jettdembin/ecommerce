import React from "react";
import "./HeroCarousel.css";

import { Carousel } from "react-responsive-carousel";

import hero1 from "./images/hero-mobile.jpg";

function HeroCarousel() {
  return (
    <Carousel
      className="HeroCarousel-main-slide"
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={hero1} height="277px" />
      </div>
      <div>
        <img src={hero1} height="277px" />
      </div>
      <div>
        <img src={hero1} height="277px" />
      </div>
    </Carousel>
  );
}

export default HeroCarousel;

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
