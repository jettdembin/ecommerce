import React from "react";
import "./Nav.css";

import * as mui from "./mui";

import logo from "./images/logo.png"

function Nav() {

  return (
    <div className="Nav">
      <div className="Nav-left">
        <div className="Nav-left-navigation">
          <mui.Dehaze aria-label="toggle-menu" />
        </div>
        <div className="Nav-left-navigation">
          <img className="Nav-left-navigation-logo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="Nav-middle">
        <ul>
          <li>MEN'S</li>
          <li>WOMEN'S</li>
          <li>ACCESSORIES</li>
          <li>SALE!</li>
        </ul>
      </div>
      <div>
        <div className="Nav-right">
          <div className="Nav-right-navigation">
            <mui.Search aria-label="search" />
          </div>
          <div className="Nav-right-navigation">
            <mui.PersonIcon aria-label="account" />
          </div>
          <div className="Nav-right-navigation">
            <mui.ShoppingCartIcon aria-label="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
