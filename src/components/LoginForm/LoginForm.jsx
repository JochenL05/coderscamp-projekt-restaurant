import React from "react";
import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="loginForm">
      <div className="title"> Login</div>
      <div className="wraper">
        <input type="text" name="username" placeholder="Username" size="10" />
        <input type="text" name="password" placeholder="Password" size="10" />
        <button type="submit">Sing in</button>
      </div>
    </div>
  );
}
