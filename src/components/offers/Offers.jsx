import React from "react";
import "./offers.css";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="packages-section">
      <div className="package-inner">
        <div className="packages-heading">
          <h2>Our Trending Tour</h2>
          <h1>Packages</h1>
        </div>
        <div className="packages-grid-line">
          <div className="package-item">
            <img src="/Images/packages/Fm.jpg" alt="img" />
            <div className="price-duration">
              <div className="price-days">
                <span>Fairy Meadows, Naran, Kaghan, Hunza, Skardu</span>
                <div className="location-icon">
                  <CiLocationOn fontSize={20} />
                  <h1>Pakistan</h1>
                  <img src="/Images/packages/Pakistan.webp" alt="ima" />
                </div>
              </div>
              <div className="days-persons">
                <span>Per Person</span>
                <h3>$500</h3>
                <div className="calender-icon">
                  <CiCalendar fontSize={20} />8 Days
                </div>
              </div>
            </div>

            <div className="calender-time">
              <Link to="/offerdetail">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
          <div className="package-item">
            <img src="/Images/packages/beiging.webp" alt="img" />
            <div className="price-duration">
              <div className="price-days">
                <span>Fairy Meadows, Naran, Kaghan, Hunza, Skardu</span>
                <div className="location-icon">
                  <CiLocationOn fontSize={20} />
                  <h1>China</h1>
                  <img src="/Images/packages/China.webp" alt="ima" />
                </div>
              </div>
              <div className="days-persons">
                <span>Per Person</span>
                <h3>$500</h3>
                <div className="calender-icon">
                  <CiCalendar fontSize={20} />8 Days
                </div>
              </div>
            </div>

            <div className="calender-time">
              <Link to="/offerdetail">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
