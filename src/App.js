import React from "react";
import './App.css';

import PromoBar from "./PromoBar"
import Nav from "./Nav"
import HeroCarousel from "./HeroCarousel"
import CallToAction from "./CallToAction"
import Gallery from "./Gallery"
import ProductCarousel from "./ProductCarousel"
import Subscribe from "./Subscribe"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <PromoBar></PromoBar>
      <Nav></Nav>
      <HeroCarousel></HeroCarousel>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
      <ProductCarousel></ProductCarousel>
      <img src="" alt="" />
      <CallToAction></CallToAction>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
