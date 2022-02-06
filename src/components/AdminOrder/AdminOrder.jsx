import "./adminOrder.css";
import React from "react";

function AdminOrder() {
  // eslint-disable-next-line prettier/prettier
  return (
    <div className="OrdersPreview">
      <div className="OrderList">
        <h1>Orders</h1>
        <button className="buttonOrder" type="submit">
          SEND
        </button>
        <ul>
          List of orders
          <li>date</li>
          <li>email</li>
          <li>delivery adress</li>
          <li>products to order and prices</li>
          <li>total price</li>
          <li>payment status</li>
        </ul>
        <button></button>
      </div>
    </div>
  );
}

export default AdminOrder;
