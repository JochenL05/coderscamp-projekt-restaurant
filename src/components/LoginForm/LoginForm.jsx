import React, { useState } from "react";
import "./loginForm.css";

// eslint-disable-next-line react/prop-types
export default function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };
  return (
    <form className="loginForm" onSubmit={submitHandler}>
      <h1 className="title"> Login</h1>
      {error != "" ? <div className="error">{error}</div> : ""}
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          size="10"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          size="10"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          size="10"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <button className="login-button" type="submit">
        Sign in
      </button>
      <h4> Reset your password</h4>
    </form>
  );
}
