import React from "react";
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={props.image} alt={props.image} />
      </div>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-new-price">{props.new_price}</div>
        <div className="item-old-price">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
