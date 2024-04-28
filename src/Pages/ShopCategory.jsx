import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="container">
        <div className="shop-category-banner">
          <img src={props.banner} alt={props.category} />
        </div>
        <div className="shop-category-list">
          {all_product
            .filter((item) => item.category === props.category)
            .map((item) => (
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

export default ShopCategory;
