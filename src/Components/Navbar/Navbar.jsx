import React, { useState } from "react";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </Link>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men </Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("woment")}>
          <Link to="/woments">Woment </Link> {menu === "woment" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kinds")}>
          <Link to="/kinds">Kids </Link>
          {menu === "kinds" ? <hr /> : null}
        </li>
      </ul>
      <div className="navbar-login-cart">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cart} alt="" />
          </Link>
          <span className="navbar-count">0</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
