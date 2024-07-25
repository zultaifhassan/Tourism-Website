import React from "react";
import "./home.css";
import Slider from "../Sliders/Mainslider/Mainslider.jsx";
import DestinationSlider from "../Sliders/DesSlider/DestinationSlider.jsx";
import Services from '../homefirst/Services/Services.jsx'

const Homefirst = () => {
  return (
    <div className="main-first-section">
        <Slider />
        <DestinationSlider />
        <Services />
    </div>
  );
};

export default Homefirst;
