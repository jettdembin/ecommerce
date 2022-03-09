import React from "react";
import "./Nav.css";

import * as mui from "../mui/index";

import logo from "../images/logo.png"

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
          <li><a href="#">MEN'S</a></li>
          <li><a href="#">WOMEN'S</a></li>
          <li><a href="#">ACCESSORIES</a></li>
          <li><a href="#">SALE!</a></li>
        </ul>
      </div>
      <div>
        <div className="Nav-right">
          <div className="Nav-right-navigation">
            <mui.Search aria-label="search" />
          </div>
          <div className="Nav-right-navigation">
            <a href="#"><mui.PersonIcon aria-label="account" /></a>
          </div>
          <div className="Nav-right-navigation">
            <a href="#"><mui.ShoppingCartIcon aria-label="cart" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
