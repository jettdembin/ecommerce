import React, { useState, useEffect } from "react";
import "./App.css";

import PromoBar from "./PromoBar/PromoBar";
import Nav from "./Nav/Nav";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import CallToAction from "./CallToAction/CallToAction";
import Gallery from "./Gallery/Gallery";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import HeroSlide from "./HeroCarousel/HeroSlide/HeroSlide";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

import hero4 from "./images/hero-4-mobile.jpg";

import { useMediaQuery } from "react-responsive";

import hero4Desktop from "./images/hero-4-desktop.jpg";

function App() {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    document.title = "Ecommerce Website";
  }, []);

  return (
    <div className="App">
      {checkIfMediumPlus ? (
        <div className="App-desktop">
          <PromoBar></PromoBar>
          <Nav />
          <HeroCarousel className="App-desktop-arrow" />
          <Gallery />
          <ProductCarousel category="New Arrivals" />
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
        </div>
      ) : (
        <div className="App-mobile">
          <PromoBar></PromoBar>
          <Nav />
          <HeroCarousel />
          <CallToAction
            header="Shop New Arrivals"
            info="Our coolest new items are waiting for you!"
          />
          <Gallery />
          <ProductCarousel category="Shop New Arrivals" />
          <div className="App-desktop">
            <img
              src={hero4}
              alt=""
              style={{ width: "100%", marginTop: "50px", marginBottom: "-5px" }}
            />
            <CallToAction
              header="Our Favorite Tees"
              info="Everyday tees you need!"
            />
          </div>
          <Subscribe />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
