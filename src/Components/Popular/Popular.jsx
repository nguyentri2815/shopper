import React from "react";
import './Popular.css'
import Item from "../Item/Item";
import data_popular from "../Assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <h2>
          POPULAR IN WOMENT
          <hr />
        </h2>
        <div className="popular-list">
          {data_popular.map((item) => (
            <Item
              key ={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
