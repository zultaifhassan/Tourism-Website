import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="navbar-inner">
        <div className="nav-logo-side">
          {/* <h2>KarakoramSafari</h2> */}
          <img src="/Images/logo.png" alt="logo" />
        </div>
        <div className="nav-center-links">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transport"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Transport
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-book-button">
          <Link to="/rentcar">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
