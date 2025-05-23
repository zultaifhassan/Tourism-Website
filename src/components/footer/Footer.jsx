import React from "react";
import "./footer.css";
import { CiLocationOn } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/Images/logo.png" alt="logo" />
            <p>
              "Travel with Karakoram Safari – where adventure meets serenity!
              Explore majestic peaks, vibrant cultures, and untouched wilderness
              with expert guides. Your journey to unforgettable memories starts
              here!"
            </p>
          </div>
          <div className="footer-address">
            <h2>Contact Information</h2>
            <div className="address-links">
              <span>
                <CiLocationOn />
                <p>123, Street Name, City, Country</p>
              </span>
              <span>
                <BsTelephone />
                <p>+92 345777667</p>
              </span>
              <span>
                <IoMailUnreadOutline />
                <p>karakoramsafari@gmail.com</p>
              </span>
            </div>
          </div>
          <div className="footer-pages">
            <h2>Quick Links</h2>
            <div className="footer-pages-links">
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/about">
                <p>About Us</p>
              </NavLink>
              <NavLink to="/offers">
                <p>Packages</p>
              </NavLink>
              <NavLink to="/offers">
                <p>Destinations</p>
              </NavLink>
              <NavLink to="/offers">
                <p>Blog</p>
              </NavLink>
              <NavLink to="/dashboard">
                <p>Dashboard</p>
              </NavLink>
            </div>
          </div>
          <div className="social-links">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <NavLink>
                <span>
                  <RiFacebookLine />
                </span>
              </NavLink>
              <NavLink>
                <span>
                  <CiInstagram />
                </span>
              </NavLink>
              <NavLink>
                <span>
                  <PiYoutubeLogoThin />
                </span>
              </NavLink>
              <NavLink>
                <span>
                  <CiLinkedin />
                </span>
              </NavLink>
            </div>
            <h2>Payment Method</h2>
            <div className="Easy-paise-logo">
              <img src="/Images/ep.png" alt="logo" />
              {/* <img src="/Images/binance.png" alt="logo" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copy-inner">
          <p>Copyright &copy; 2024 KarakoramSafari. All rights reserved.</p>
          <p>Developed by: Zultaif Hassan</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
