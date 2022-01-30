import React from "react";
import "./Reservations.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const Reservations = () => {
  return (
    <div>
      <Topbar />
      <div className="form-content-right">
        <form className="form">
          <h1>Make a reservation</h1>
          <div className="form-inputs">
            <label className="form-label">* Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Name"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">* Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Phone"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">* Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">* Date</label>
            <input
              type="date"
              name="date"
              className="form-input"
              placeholder="Date"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">* Time</label>
            <input
              type="time"
              name="time"
              className="form-input"
              placeholder="Time"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">
              * Choose a table
              <select>
                <option>For 8 people</option>
                <option>For 6 people</option>
                <option>For 5 people</option>
                <option>For 4 people</option>
              </select>
            </label>
          </div>
          <div className="form-inputs">
            <label className="form-label">Note</label>
            <input
              type="text"
              name="note"
              className="form-input"
              placeholder="Note"
            />
          </div>
          <button className="form-input-btn" type="submit">
            BOOK TABLE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Reservations;
