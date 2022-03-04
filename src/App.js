import React from "react";
import './App.css';

import Notice from "./Notice"
import Nav from "./Nav"
import Carousel from "./Carousel"
import CallToAction from "./CallToAction"
import Gallery from "./Gallery"
import Subscribe from "./Subscribe"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Notice></Notice>
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
