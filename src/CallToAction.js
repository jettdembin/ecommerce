import React from "react";
import "./CallToAction.css";

import ShopBtn from "./ShopBtn";

function CallToAction(props) {
  return (
    <div className="CallToAction">
      <h1 className="CallToAction-header">{props.header}</h1>
      <p className="CallToAction-info">{props.info}</p>
      <ShopBtn/>
    </div>
  )
}

export default CallToAction