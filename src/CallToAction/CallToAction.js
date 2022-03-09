import React from "react";
import "./CallToAction.css";

import ShopBtn from "./CallToActionBtn/ShopBtn";

function CallToAction(props) {
  return (
    <div className="CallToAction">
      <h1 className="CallToAction-header" style={{color: props.color}}>{props.header}</h1>
      <p className="CallToAction-info" style={{color: props.color}}>{props.info}</p>
      <ShopBtn/>
    </div>
  )
}

export default CallToAction