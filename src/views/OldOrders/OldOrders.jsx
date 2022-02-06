import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import OldOrdersList from "../../components/OldOrdersList/OldOrdersList";

const OldOrders = () => {
  return (
    <div>
      <Topbar />
      <h1>Previous orders</h1>
      <OldOrdersList />
      <Footer />
    </div>
  );
};

export default OldOrders;
