import { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { useParams } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [category, setCategory] = useState('shop');
  
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (isNaN(+prev[productId]) ? 0 : +prev[productId]) + 1,
    }));
  };
  const removeFromCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (isNaN(+prev[productId]) ? 0 : +prev[productId]) - 1,
    }));
  };
  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cart) {
      if (cart[key] > 0) {
        let productInfo = all_product.find((product) => product.id === Number(key));
        totalAmount = totalAmount + productInfo.new_price * cart[key];
      }
    }
    return totalAmount;
  };
  const getTotalCartItem =()=>{
    let totalCartItem = 0;
    for (const key in cart) {
      if(cart[key] > 0 ){
        totalCartItem = totalCartItem + cart[key];
      }
    }
    return totalCartItem;
  }
  const contextValue = {
    //có thể data khác nữa
    category,
    all_product,
    cart,
    addToCart,
    removeFromCart,
    getCartTotalAmount,
    getTotalCartItem,
    setCategory
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
