import React, { useContext } from "react";
import { CartContext } from "../../context/Context";
import "./MenuCard.css";
import pizza from "./pizza-pepperoni.jpeg";

/* eslint-disable react/prop-types */
const MenuCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(dish);
  };

  // return (
  //   <div className="menu_menucard">
  //     {/* <div className="menu_card_image">{dish.image}</div> */}
  //     <div className="menucard_name">{dish.name}</div>
  //     <div className="menucard_price">{dish.price}</div>
  //     <button className="menucard_orderbutton" >
  //       Add to basket
  //     </button>
  //     {/* {added ? <div>in the cart</div> : <div>NOT in the cart</div>} */}

  /* eslint-disable react/prop-types */

  // const MenuCard = ({ dish }) => {
  return (
    <div className="menu_menucard">
      <div className="menu_items">
        <div className="menu-card-image">
          <img src={pizza} alt="pizza" />
        </div>
        <div className="details">
          <div className="details-sub">
            <div className="menucard-name">{dish.name}</div>
            <div className="menucard_price">{dish.price}</div>
          </div>
          {/* <div className="menucard-description">{dish.description}</div> */}
          <button
            type="submit"
            className="menucard-orderbutton"
            onClick={handleClick}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
