/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Restauracja
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Strona Główna
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/menu" activeClassName="active" className="nav-links" onClick={handleClick}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                O nas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/reservation" activeClassName="active" className="nav-links" onClick={handleClick}>
                Rezerwacje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact-page" activeClassName="active" className="nav-links" onClick={handleClick}>
                Kontakt
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Topbar;
