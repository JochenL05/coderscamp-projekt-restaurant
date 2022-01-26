import React from "react";
import "./Orderlist.css";

let date = "01.01.2020";
let order = "Pizza";
let price = "10$";
let ingredivents = "cheese";
let address = "Greenstreet 1";

const Orderlist = () => {
  return (
    <div className="grid">
      <div className="child">Date</div>
      <div className="child">Order</div>
      <div className="child">Price</div>
      <div className="child">Ingredivents</div>
      <div className="child">Address</div>
      <div className="child">{date}</div>
      <div className="child">{order}</div>
      <div className="child">{price}</div>
      <div className="child">{ingredivents}</div>
      <div className="child">{address}</div>
    </div>
  );
};

export default Orderlist;
