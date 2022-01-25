import './register.css'
import React from 'react';

export default function Register() {
  return (
  <div className="mainRegister">
  <div className="registerTittle">
  <h1>
      <p>Get started with us today</p>
      <p>Create your account</p></h1>
  <div className="inputs">
  <i className="topIcon fas fa-user"></i>
      <input 
      type="text"
      name="username"
      placeholder= "enter your username"/>
  </div>
  <div className="inputs">
  <label><i className="topIcon fas fa-envelope"></i></label>
      <input className="registerInput"
      type="text"
      name="email"
      placeholder="enter your email"/>
  </div>
  <div className="inputs">
  <label><i className="topIcon fas fa-lock"></i></label>
      <input className="registerInput"
      type="text"
      name="email"
      placeholder="password"/>
  </div>
  <div className="inputs">
  <label><i className="topIcon fas fa-lock"></i></label>
      <input className="registerInput"
      type="text"
      name="email"
      placeholder="Confirm your password"/>
  </div>
  <button className="registerButton">Register</button>

    </div> 
  </div>
  )
}
