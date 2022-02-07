import React, { useState, createContext } from "react";

const CartContext = createContext();

/* eslint-disable react/prop-types */

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // setCartItems((currentItems) => {
    //   let items = [];
    //   currentItems.((el) => {
    //     if (el.id === item.id) {
    //       el.qty++;
    //     }
    //     items.push(el);
    //   });
    //   return items;
    // });
    console.log(item);
    setCartItems([
      ...cartItems,
      cartItems.filter((el) => (el.id === item.id ? (el.qty += 1) : el.qty)),
    ]);
    console.log(cartItems);
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
