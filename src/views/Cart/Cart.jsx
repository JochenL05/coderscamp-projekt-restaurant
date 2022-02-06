import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { CartContext } from "../../context/Context";

const Cart = () => {
  const { getCurrentItems } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const x = getCurrentItems();
    setItems(x);
  }, []);

  const handleClick = () => {
    const x = getCurrentItems();
    setItems(x);
  };

  return (
    <>
      <Topbar />
      <button onClick={handleClick}>Update Cart</button>
      {items.length > 0 ? (
        items.map((el) => {
          return <div key={el}>{el}</div>;
        })
      ) : (
        <div></div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
