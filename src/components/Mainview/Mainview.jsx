import React from "react";
import "./Mainview.css";
import { Link } from "react-router-dom";

const Mainview = () => {
  return (
    <div className="main">
      <h1 className="main__title">Welcome!</h1>
      <Link to={`/reservations`}>
        <button className="main__button">Reservation</button>
      </Link>
    </div>
  );
};

export default Mainview;
