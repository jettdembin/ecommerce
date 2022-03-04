import React from "react";
import './App.css';

import PromoBar from "./PromoBar"
import Nav from "./Nav"
import Carousel from "./Carousel"
import CallToAction from "./CallToAction"
import Gallery from "./Gallery"
import Subscribe from "./Subscribe"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <PromoBar></PromoBar>
      <Nav></Nav>
      <Carousel></Carousel>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
      <Carousel></Carousel>
      <img src="" alt="" />
      <CallToAction></CallToAction>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
