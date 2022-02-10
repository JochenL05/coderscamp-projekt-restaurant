import React, { useState, createContext } from "react";

const CartContext = createContext();

/* eslint-disable react/prop-types */

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((currentItems) => [...currentItems, item]);
  };

  const getCurrentItems = () => {
    return cartItems;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCurrentItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

export default Context;
