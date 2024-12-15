import React from "react";
import "./tranport.css";
import { IoCheckmark } from "react-icons/io5";

const Transport = () => {
  return (
    <div className="transport-page">
      <div className="transport-page-inner">
        <div className="transport-page-heading">
          <h2>Book an Affortable</h2>
          <h1>Transport</h1>
        </div>
        <div className="transport-grid-line">
          <div className="transport-boxes">
            <div className="transport-image">
              <img src="/Images/Transport/Prado.jpg" alt="" />
            </div>
            <div className="transport-details">
              <h2>Prado</h2>
              <div className="transport-includes">
                <span>
                  <IoCheckmark fontSize={20} />
                  <h4>Driver</h4>
                </span>
                <span>
                  <IoCheckmark fontSize={20} />
                  <h4>Driver</h4>
                </span>
                <span>
                  <IoCheckmark fontSize={20} />
                  <h4>Driver</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
