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
    let newArr = [];
    if (cartItems.length > 0) {
      newArr = cartItems.map((el) => {
        if (el.id === item.id) {
          el.qty += 1;
        }
        return el;
      });
    } else {
      newArr = [item];
    }
    console.log(item);
    setCartItems([...newArr]);
    console.log(newArr);
  };

  const getCurrentItems = () => {
    // console.log("cartItems");
    // console.log(cartItems);
    return cartItems;
  };

  const getCurrentItem = (item) => {
    return cartItems.filter((el) => {
      return el.id === item.id;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, getCurrentItems, getCurrentItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

export default Context;
