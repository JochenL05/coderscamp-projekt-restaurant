import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { CartContext } from "../../context/Context";

const Cart = () => {
  const { getCurrentItems } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(() => {
      let sum = 0;
      console.log(items);
      items.map((el) => {
        console.log(el.price);
        sum += el.price;
      });
      return sum;
    });
  }, [items]);

  useEffect(() => {
    const x = getCurrentItems();
    setItems(x);
  }, []);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const handleClick = () => {
    const x = getCurrentItems();
    setItems(x);
  };

  return (
    <>
      <Topbar />
      <button onClick={handleClick}>Update Cart</button>
      {items.length > 0 ? (
        <div>
          {items.map((el) => {
            return (
              <>
                <div key={el.id}>{el.name}</div>
                <button onClick={decrementCount}> - </button>
                <button onClick={incrementCount}> + </button>
                <span> {count} </span>
              </>
            );
          })}
          <div>Total price: {totalPrice}</div>
        </div>
      ) : (
        <div> Cart is empty</div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
