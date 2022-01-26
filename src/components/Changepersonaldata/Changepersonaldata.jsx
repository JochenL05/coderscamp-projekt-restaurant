import React from "react";
import "./Changepersonaldata.css";

const Changepersonaldata = () => {
  return (
    <body>
      <div className="l-form">
        <form action="" className="form">
          <h1 className="form__title">Change personal data</h1>

          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              Name
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              Surname
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              Phone number
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              E-mail
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              City
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              Street
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              House number
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              City
            </label>
          </div>

          <div className="form__div">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">
              Post code
            </label>
          </div>

          <input type="submit" className="form__button" value="Confirm" />
        </form>
      </div>
    </body>
  );
};

export default Changepersonaldata;
