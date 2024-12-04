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
            <h3>Package 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. hghghfdfdf</p>
            <button>Book Now</button>
          </div>
          <div className="package-item">
            <h3>Package 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ihkkhkjhkkjkhkjhkhjkjhkkjhkhkhjkhkhkhjkhkjhkhkjhkjhk</p>
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
