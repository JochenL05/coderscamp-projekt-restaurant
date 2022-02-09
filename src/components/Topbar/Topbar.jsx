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
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Strona Główna
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                O nas
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/reservations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Rezerwacje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/checkout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i className="fas fa-shopping-basket"></i>
              </NavLink>
            </li>

            {localStorage.getItem("loggedIn") === "false" && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Zaloguj się
                </NavLink>
              </li>
            )}

            {localStorage.getItem("loggedIn") === "true" && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/usersettings"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Ustawienia
                </NavLink>
              </li>
            )}

            {localStorage.getItem("loggedIn") === "true" && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/orders"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Stare zamówienia
                </NavLink>
              </li>
            )}

            {localStorage.getItem("loggedIn") === "true" && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Wyloguj
                </NavLink>
              </li>
            )}
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
