import React from "react";
import "./ProductCarousel.css";

import Product from "./Product/Product";

import { Carousel } from "react-responsive-carousel";

import { useMediaQuery } from "react-responsive";

import product1 from "../images/product-1-image.jpg";


function ProductCarousel(props) {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <div className="ProductCarousel">
      <h1 className="ProductCarousel-header">{props.category}</h1>
      {checkIfMediumPlus ?
      <div className="ProductCarousel-carousel-cntr">
        <Carousel className="ProductCarousel-main-slide-cntr" showArrows={false} showThumbs={false}>
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
      :
      <Carousel className="ProductCarousel-main-slide-cntr" showArrows={true} showThumbs={false}>
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
      }
    </div>
  );
}

export default ProductCarousel;
