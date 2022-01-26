import React from "react";
//import { Link } from "react-router-dom";

let order_date = "01.01.2020";
let order_price = "1$";
const Oldorders = () => {
  return (
    <>
      <div>
        <h1>Old orders</h1>
      </div>

      <div>
        {/*   <Link to="./Oldorder"> */}
        Order from {order_date} for {order_price}.{/*    </Link> */}
      </div>
    </>
  );
};

export default Oldorders;
