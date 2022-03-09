import React from "react";
import "./PromoBar.css"

import { useMediaQuery } from "react-responsive";

function PromoBar() {
  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 480px)",
  });
  return (
    <div className="PromoBar">
      {checkIfMediumPlus ? 
      <h1 className="PromoBar-Info">FREE SHIPPING ON ALL ORDERS OVER $75</h1>
      :
      <h1 className="PromoBar-Info">FREE SHIPPING ON ALL ORDERS</h1>
      }
    </div>
  )
}

export default PromoBar;