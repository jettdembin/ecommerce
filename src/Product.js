import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="Product">
      <div className="Product-info">
        <img src={props.img} alt={props.productTitle} />
        <h6 className="Product-info-title">{props.productTitle}</h6>
        <p className="Product-info-category">{props.productCategory}</p>
        <h3 className="Product-info-price">
          <span>$</span>
          {props.productPrice}
        </h3>
      </div>
    </div>
  );
}

export default Product;
