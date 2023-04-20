import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/NavBar.css";
import google from "../assets/google.png";

function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-bar-container">
        <div className="logo">
          <img src={google} alt="Logo" />
          Google Play
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/games" activeClassName="active-link">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" activeClassName="active-link">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" activeClassName="active-link">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" activeClassName="active-link">
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
