import "./register.css";
import useForm from "./useForm";
import React from "react";

const Register = (/* {submitForm} */) => {
  const { handleChange, values, handleSubmit, errors /* , {submitForm} */ } =
    useForm();
  // useEffect(() => {
  //   dataIsCorrect && submitForm(true);
  // }, [dataIsCorrect]);
  return (
    <div className="mainRegister">
      <div className="form">
        <h2>Get started with us today!</h2>
        <h1>Register</h1>
        <div className="inputs">
          <label className="data">
            <i className="topIcon fas fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="username"
              id="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </label>
        </div>
        <div className="inputs">
          <label className="data">
            <i className="topIcon fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="email adress"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
        </div>
        <div className="inputs">
          <label className="data">
            <i className="topIcon fas fa-lock"></i>
            <input
              type="password"
              name="password1"
              placeholder="password"
              // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/"
              id="password1"
              value={values.password1}
              onChange={handleChange}
            />
            {errors.password1 && <p className="error">{errors.password1}</p>}
          </label>
        </div>
        <div className="inputs">
          <label className="data">
            <i className="topIcon fas fa-lock"></i>
            <input
              type="password"
              name="password2"
              placeholder="confirm password"
              id="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="error">{errors.password2}</p>}
          </label>
          <button onClick={handleSubmit} className="submit" formNoValidate>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
