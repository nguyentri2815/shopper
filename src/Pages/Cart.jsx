import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import cart_cross_icon from "../Components/Assets/cart_cross_icon.png";

import "./CSS/Cart.css";
const Cart = () => {
  const { all_product, cart, removeFromCart, getCartTotalAmount } =
    useContext(ShopContext);
  return (
    <div className="cart">
      <div className="container">
        <table className="cart-list">
          <thead>
            {getCartTotalAmount() > 0 && (
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Taltal</th>
                <th>Remove</th>
              </tr>
            )}
          </thead>
          <tbody>
            {all_product.map((product) => {
              if (cart[product.id] > 0) {
                return (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.new_price}</td>
                    <td>{cart[product.id]}</td>
                    <td>${product.new_price * cart[product.id]}</td>
                    <td className="cart-remove-icon">
                      <img
                        onClick={() => removeFromCart(product.id)}
                        src={cart_cross_icon}
                        alt="cart_cross_icon"
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div className="cart-down">
          <div className="cart-total">
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <div className="cart-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <div className="cart-total-item">
              <b>Total</b>
              <b>${getCartTotalAmount()}</b>
            </div>
            <div className="cart-btncheckout">PROCEED TO CHECKOUT</div>
          </div>

          <div className="cart-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promobox">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
