import React from "react";
import "./NewCollection.css";
import Item from '../../Components/Item/Item'
import new_collections from '../Assets/new_collections'

const NewCollection = () => {
  return (
    <div className="newCollection">
      <div className="container">
        <h2>
          NEW COLLECTIONS
          <hr />
        </h2>
        <div className="newCollection-list">
          {new_collections.map((item) => (
            <Item
              key = {item.id}
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

export default NewCollection;
