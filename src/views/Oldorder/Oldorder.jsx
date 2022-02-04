import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
//import Orderlist from "../../components/Orderlist/Orderlist";
import Oldorders from "../../components/Oldorders/Oldorders";

const Oldorder = () => {
  return (
    <div>
      <Topbar />
      <h1>Old order</h1>
      <Oldorders />
      <Footer />
    </div>
  );
};

export default Oldorder;
