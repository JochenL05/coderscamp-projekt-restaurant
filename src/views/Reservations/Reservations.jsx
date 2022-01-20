import React from "react";
import "./Reservations.css";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const Reservations = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Make a reservation</h1>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-input" placeholder="Name" value={values.name} onChange={handleChange} />
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone</label>
          <input type="tel" name="phone" className="form-input" placeholder="Phone" value={values.phone} onChange={handleChange} />
        </div>
        <div className="form-inputs">
          <label className="form-label">Date</label>
          <input type="date" name="date" className="form-input" placeholder="Date" value={values.date} onChange={handleChange} />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-input" placeholder="Email" value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Time</label>
          <input type="time" name="time" className="form-input" placeholder="Time" value={values.time} onChange={handleChange} />
        </div>
        <div className="form-inputs">
          <label className="form-label">Number of Persons</label>
          <input type="number" name="persons" className="form-input" placeholder="Number of Persons" value={values.persons} onChange={handleChange} />
        </div>
        <div className="form-inputs">
          <label className="form-label">Note - not required</label>
          <input type="text" name="note" className="form-input" placeholder="Note - not required" value={values.note} onChange={handleChange} />
        </div>
        <button className="form-input-btn" type="submit">
          BOOK TABLE
        </button>
      </form>
    </div>
  );
};

export default Reservations;
