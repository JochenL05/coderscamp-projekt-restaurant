import React from "react";
import Reservations from "./Reservations.jsx";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const Form = () => {
  return (
    <>
      <div>
        <Topbar />
        <Reservations />
        <Footer />
      </div>
    </>
  );
};

export default Form;
