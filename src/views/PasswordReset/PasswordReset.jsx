import React from "react";
import "./PasswordReset.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const PasswordReset = () => {
  return (
    <div>
      <Topbar />
      <div className="password-reset">
        <form className="password-reset-form">
          <h1>Reset your password</h1>
          <div className="form-inputs">
            <label for="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-input" placeholder="Enter your new password" id="password"></input>
          </div>
          <div className="form-inputs">
            <label for="passwordConfirm" className="form-label">
              Password Confirm
            </label>
            <input type="password" className="form-input" placeholder="Confirm your password" id="passwordConfirm"></input>
          </div>
          <button className="password-reset-btn" type="submit">
            Reset Password
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordReset;
