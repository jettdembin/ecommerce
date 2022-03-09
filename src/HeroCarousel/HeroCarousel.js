import React from "react";
import "./HeroCarousel.css";

import HeroSlide from "./HeroSlide/HeroSlide";

import { Carousel } from "react-responsive-carousel";

import { useMediaQuery } from "react-responsive";

import hero1Mobile from "../images/hero-1-mobile.jpg";
import hero2Mobile from "../images/hero-2-mobile.jpg";
import hero3Mobile from "../images/hero-3-mobile.jpg";

import hero1Desktop from "../images/hero-1-desktop.jpg";
import hero2Desktop from "../images/hero-2-desktop.jpg";
import hero3Desktop from "../images/hero-3-desktop.jpg";

function HeroCarousel() {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <>
      {checkIfMediumPlus ? 
      <Carousel
        className="HeroCarousel-main-slide"
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        >
        <div>
          <HeroSlide img={hero1Desktop}  color="#10504F" header="Shop New Arrivals" info="Our coolest new items are waiting for you!" />
        </div>
        <div>
          <HeroSlide img={hero2Desktop}  color="#FFFF" header="Our Fave Tees" info="Shop all our favorites"/>
        </div>
        <div>
          <HeroSlide img={hero3Desktop}  color="#FFFF" header="Men's Tees" info="Find the perfect shirt"/>
        </div>
      </Carousel>
      :
      <Carousel
        className="HeroCarousel-main-slide"
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        >
        <div>
          <img src={hero1Mobile} alt="" />
        </div>
        <div>
          <img src={hero2Mobile} alt="" />
        </div>
        <div>
          <img src={hero3Mobile} alt="" />
        </div>
        </Carousel>}
    </>
  );
}

export default HeroCarousel;
