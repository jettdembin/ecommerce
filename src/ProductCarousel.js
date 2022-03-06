import React from "react";
import "./ProductCarousel.css";

import Product from "./Product";

import { Carousel } from "react-responsive-carousel";

import product1 from "./images/product-1-image.jpg";

function ProductCarousel(props) {
  return (
    <div className="ProductCarousel">
      <h1 className="ProductCarousel-header">{props.category}</h1>
      <Carousel className="ProductCarousel-main-slide-cntr" showArrows={true}>
        <div className="ProductCarousel-main-slide">
          <Product
            img={product1}
            productTitle="Product Title"
            productCategory="WOMEN'S T-SHIRT"
            productPrice="19.99"
          />
          <Product
            img={product1}
            productTitle="Product Title"
            productCategory="WOMEN'S T-SHIRT"
            productPrice="19.99"
          />
        </div>
        <div className="ProductCarousel-main-slide">
          <Product
            img={product1}
            productTitle="Product Title"
            productCategory="WOMEN'S T-SHIRT"
            productPrice="19.99"
          />
          <Product
            img={product1}
            productTitle="Product Title"
            productCategory="WOMEN'S T-SHIRT"
            productPrice="19.99"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
