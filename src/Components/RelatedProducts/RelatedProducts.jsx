import React from "react";
import "./RelatedProducts.css";
import data from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h2>
        Related Products <hr />
      </h2>
      <div className="relatedProducts-list">
        {data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
