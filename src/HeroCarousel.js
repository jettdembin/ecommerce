import React from "react";
import "./HeroCarousel.css";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import bk1 from "./images/bk1.jpeg";


function HeroCarousel() {
  return (
    <Carousel className="HeroCarousel-main-slide" showArrows={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div>
            <img src={bk1} height="375px"/>
        </div>
        <div>
            <img src={bk1} height="375px" />
        </div>
        <div>
            <img src={bk1} height="375px" />
        </div>
    </Carousel>
);
}

export default HeroCarousel;

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls