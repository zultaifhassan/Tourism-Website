import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="navbar-inner">
        <div className="nav-logo-side">
          <h2>KarakoramSafari</h2>
        </div>
        <div className="nav-center-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/offers">Packages</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>  
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-book-button">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
