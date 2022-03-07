import React from "react";
import "./App.css";

import PromoBar from "./PromoBar";
import Nav from "./Nav";
import HeroCarousel from "./HeroCarousel";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import ProductCarousel from "./ProductCarousel";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

import hero4 from "./images/hero-4-mobile.jpg";

function App() {
  return (
    <div className="App">
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
        style={{ width: "100%", marginTop: "50px" }}
      />
      <CallToAction header="Our Favorite Tees" info="Everyday tees you need!" />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
