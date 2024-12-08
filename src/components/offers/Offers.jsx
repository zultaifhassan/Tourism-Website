import React from "react";
import "./offers.css";

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
            <img src="/Images/packages/Fm.jpg" />
            <div className="price-duration">
              <div className="price-days">
                <span>Fairy Meadows, Naran, Kaghan, Hunza, Skardu</span>
              </div>
              <div className="days-persons">
                <span>Per Person</span>
                <h3>$500</h3>
              </div>
            </div>
            <div className="calender-time">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              hghghfdfdf
            </p>
            <button>Book Now</button>
            </div>
          </div>
          <div className="package-item">
            <h3>Package 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              ihkkhkjhkkjkhkjhkhjkjhkkjhkhkhjkhkhkhjkhkjhkhkjhkjhk
            </p>
            <button>Book Now</button>
          </div>
          <div className="package-item">
            <h3>Package 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Book Now</button>
          </div>
          <div className="package-item">
            <h3>Package 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
