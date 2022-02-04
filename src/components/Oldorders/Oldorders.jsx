import React from "react";
import { Link } from "react-router-dom";
import OrderArr from "../../components/Orderlist/OrderArr";
import "./Oldorders.css";

const Oldorders = () => {
  return (
    <>
      <div>
        <h1>Old orders</h1>
      </div>

      <div className="listDesign">
        {OrderArr.map((order) => {
          return (
            <>
              <div className="listDesign__text">
                <Link to={`/orders/${order.orderID}`} key={order.orderID}>
                  <p>
                    Order from {order.orderDate} for {order.orderPrice}.
                  </p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Oldorders;
