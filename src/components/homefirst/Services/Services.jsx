import React from "react";
import "./service.css";

const Services = () => {
  return (
    <div className="services-outer-div">
      <div className="services-inner-div">
        <div className="services-sec-head">
          <h1>We Offer Best Services</h1>
          <p>our services have been trusted by world travelers.</p>
        </div>
        <div className="services-boxes">
          <div className="service-box1">
            <img src="/Images/service/beach.png" alt="" />
            <h2>Summer Tours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sed laudantium nobis ad doloribus corporis adipisci 
            </p>
          </div>
          <div className="service-box1">
            <img src="/Images/service/winter.png" alt="" />
            <h2>Winter Tours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sed laudantium nobis ad doloribus corporis adipisci
            </p>
          </div>
          <div className="service-box1">
            <img src="/Images/service/hiking.png" alt="" />
            <h2>Adventure Tours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sed laudantium nobis ad doloribus corporis adipisci 
            </p>
          </div>
          <div className="service-box1">
            <img src="/Images/service/tour-guide.png" alt="" />
            <h2>Guided Tours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sed laudantium nobis ad doloribus corporis adipisci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
