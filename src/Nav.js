import React from "react";
import "./Nav.css";

import * as mui from "./mui";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-left">
        <div className="Nav-left-navigation">
          <mui.Dehaze aria-label="toggle-menu"/>
        </div>
        <div className="Nav-left-navigation">
          <mui.Add  role="presentation" />
        </div>
      </div>
      <div>
        <div className="Nav-right">
          <div className="Nav-right-navigation">
            <mui.Search  aria-label="search" />
          </div>
          <div className="Nav-right-navigation">
            <mui.PersonIcon aria-label="account"/>
          </div>
          <div className="Nav-right-navigation">
            <mui.ShoppingCartIcon  aria-label="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;