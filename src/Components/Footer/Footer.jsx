import React from "react";

import "./Footer.css";
import logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social">
        <div className="footer-social-icons">
          <img src={instagram_icon} alt="instagram icon" />
          <img src={pintester_icon} alt="pintester icon" />
          <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
