import React from "react";

import "./Hero.css";

import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-left">
          <h4>NEW ARRIVALS ONLY</h4>
          <h1>
            <p className="hero-hand">
              <span>New</span>
              <img src={hand_icon} alt="hand icon" />
            </p>
            <p>collections</p>
            <p>for everuone</p>
          </h1>
          <button className="hero-btn-latest">
            latest collections <img src={arrow} alt="arrow icon" />
          </button>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
