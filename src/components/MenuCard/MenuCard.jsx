import React, { useContext } from "react";
import { CartContext } from "../../context/Context";

/* eslint-disable react/prop-types */
const MenuCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ name: dish.name, price: dish.price });
  };

  return (
    <div className="menu_menucard">
      {/* <div className="menu_card_image">{dish.image}</div> */}
      <div className="menucard_name">{dish.name}</div>
      <div className="menucard_price">{dish.price}</div>
      <button className="menucard_orderbutton" onClick={handleClick}>
        Add to basket
      </button>
      {/* {added ? <div>in the cart</div> : <div>NOT in the cart</div>} */}
    </div>
  );
};

export default MenuCard;
