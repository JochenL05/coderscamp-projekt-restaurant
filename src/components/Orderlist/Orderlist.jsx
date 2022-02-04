import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Orderlist.css";
import OrderArr from "./OrderArr";

const Orderlist = () => {
  let { orderID } = useParams();
  let order = OrderArr.filter((ord) => {
    return ord.orderID === orderID;
  });
  console.log(order[0]);
  useEffect(() => {
    console.log(orderID);
  }, []);

  return (
    <div className="orderList">
      <div className="orderList_header">Date</div>
      <div className="orderList_header">Delivery Address</div>
      <div className="orderList_header">Dishes Ordered</div>
      <div className="orderList_header">Price</div>
      <div className="orderList_data">{order[0].orderDate}</div>
      <div className="orderList_data">{order[0].deliveryAddress}</div>
      <div className="orderList_data">
        {order[0].orderedDishes.map((dish, index) => {
          return (
            <p key={index}>
              {dish.dishName} - {dish.dishPrice}
            </p>
          );
        })}
      </div>
      <div className="orderList_data">{order[0].orderPrice}</div>
    </div>
  );
};

export default Orderlist;
