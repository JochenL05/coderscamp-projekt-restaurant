import './register.css'

export default function Register() {
  return( 
  <div className="mainRegister">
    <div className="form">
    <h1><p>Get started with us today!</p>
    <p>Register</p>
    </h1>
    <div className="inputs">
    <label className="data">
    <i className="topIcon fas fa-user"></i>
        <input 
        type="text"
        name="Usermane"
        placeholder="username"/>

    </label>
    </div>
    <div className="inputs">
    <label className="data">
    <i className="topIcon fas fa-envelope"></i>
        <input 
        type="email"
        name="email"
        placeholder="adress"/>
    </label>
    </div>
    <div className="inputs">
    <label className="data">
    <i className="topIcon fas fa-lock"></i>
        <input 
        type="text"
        name="Password"
        placeholder="password"/>
    </label>
    </div>
    <div className="inputs">
    <label className="data">
    <i className="topIcon fas fa-lock"></i>
        <input 
        type="text"
        name="password"
        placeholder="confirm password"/>
    </label>
    </div>
    <button className="inputButton" type="submit">
        Register
    </button>
    </div>
  </div>
    )
}

