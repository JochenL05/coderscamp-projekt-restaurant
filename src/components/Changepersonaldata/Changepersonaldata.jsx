import React from "react";
import "./changePersonalData.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [postcode, setPostcode] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setSubmitted(false);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
    setSubmitted(false);
  };

  const handleHouse = (e) => {
    setHouse(e.target.value);
    setSubmitted(false);
  };

  const handlePostcode = (e) => {
    setPostcode(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      surname === "" ||
      email === "" ||
      phone === "" ||
      city === "" ||
      street === "" ||
      house === "" ||
      postcode === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1> Personal data successfully changed! </h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1> Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <body>
        <div className="l-form">
          <form action="" className="form">
            <h1 className="form__title">Change personal data</h1>

            <div className="form__div">
              <input
                onChange={handleName}
                className="form__input"
                placeholder=" "
                value={name}
              />
              <label htmlFor="" className="form__label">
                Name
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handleSurname}
                className="form__input"
                placeholder=" "
                value={surname}
              />
              <label htmlFor="" className="form__label">
                Surname
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handlePhone}
                type="text"
                className="form__input"
                placeholder=" "
                value={phone}
              />
              <label htmlFor="" className="form__label">
                Phone number
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handleEmail}
                className="form__input"
                placeholder=" "
                value={email}
              />
              <label htmlFor="" className="form__label">
                E-mail
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handleCity}
                className="form__input"
                placeholder=" "
                value={city}
              />
              <label htmlFor="" className="form__label">
                City
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handleStreet}
                className="form__input"
                placeholder=" "
                value={street}
              />
              <label htmlFor="" className="form__label">
                Street
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handleHouse}
                className="form__input"
                placeholder=" "
                value={house}
              />
              <label htmlFor="" className="form__label">
                House number
              </label>
            </div>

            <div className="form__div">
              <input
                onChange={handlePostcode}
                className="form__input"
                placeholder=" "
                value={postcode}
              />
              <label htmlFor="" className="form__label">
                Post code
              </label>
            </div>

            <div>
              {errorMessage()}
              {successMessage()}
            </div>

            <input
              onClick={handleSubmit}
              type="submit"
              className="form__button"
              value="Confirm"
            />
          </form>
        </div>
      </body>
    </>
  );
}
