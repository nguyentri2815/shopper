import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-img">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.image} /></Link>
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
