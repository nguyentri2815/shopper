import React, { useContext, useEffect, useState } from "react";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItem, category, setCategory} = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </Link>
        <ul className="navbar-menu">
          <li onClick={() => setCategory("shop")}>
            <Link to="/">Shop</Link>
            {category === "shop" ? <hr /> : null}
          </li>
          <li onClick={() => setCategory("men")}>
            <Link to="/mens">Men </Link>
            {category === "men" ? <hr /> : null}
          </li>
          <li onClick={() => setCategory("women")}>
            <Link to="/woments">Woment </Link>{" "}
            {category === "women" ? <hr /> : null}
          </li>
          <li onClick={() => setCategory("kid")}>
            <Link to="/kinds">Kids </Link>
            {category === "kid" ? <hr /> : null}
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
            <span className="navbar-count">{+getTotalCartItem()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
