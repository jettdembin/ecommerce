import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="Category">
      <h2>{props.category}</h2>
    </div>
  );
}

export default Category;
