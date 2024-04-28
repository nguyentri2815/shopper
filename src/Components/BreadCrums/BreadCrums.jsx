import React from "react";
import "./BreadCrums.css";

import breadcrum_arrow from "../Assets/breadcrum_arrow.png";
const BreadCrums = (props) => {
  return (
    <div className="breadCrums">
      HOME <img src={breadcrum_arrow} alt="breadcrum arrow" /> SHOP{" "}
      <img src={breadcrum_arrow} alt="breadcrum arrow" /> {props.category}{" "}
      <img src={breadcrum_arrow} alt="breadcrum arrow" /> {props.name}
    </div>
  );
};

export default BreadCrums;
