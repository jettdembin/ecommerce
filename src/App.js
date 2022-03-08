import React from "react";
import "./App.css";

import PromoBar from "./PromoBar";
import Nav from "./Nav";
import HeroCarousel from "./HeroCarousel";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import ProductCarousel from "./ProductCarousel";
import HeroSlide from "./HeroSlide";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

import hero4 from "./images/hero-4-mobile.jpg";

import { useMediaQuery } from "react-responsive";

import hero4Desktop from "./images/hero-4-desktop.jpg";

function App() {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 480px)",
  });

  return (
    <div className="App">
      {checkIfMediumPlus ? (
        <>
          <PromoBar></PromoBar>
          <Nav />
          <HeroCarousel />
          <Gallery />
          <ProductCarousel category="Shop New Arrivals" />
          <div className="App-bottom-hero">
            <HeroSlide
              img={hero4Desktop}
              color="#FFFF"
              header="Our Favorite Tees"
              info="Everday Tees you need"
            />
          </div>
          <Subscribe />
          <Footer />
        </>
      ) : (
        <>
          <PromoBar></PromoBar>
          <Nav />
          <HeroCarousel />
          <CallToAction
            header="Shop New Arrivals"
            info="Our coolest new items are waiting for you!"
          />
          <Gallery />
          <ProductCarousel category="Shop New Arrivals" />
          <img
            src={hero4}
            alt="display image"
            style={{ width: "100%", marginTop: "50px", marginBottom: "-5px" }}
          />
          <CallToAction
            header="Our Favorite Tees"
            info="Everyday tees you need!"
          />
          <Subscribe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
