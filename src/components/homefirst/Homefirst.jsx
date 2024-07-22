import React from "react";
import "./home.css";
import Slider from "../Sliders/Mainslider/Mainslider.jsx";
import DestinationSlider from "../Sliders/DesSlider/DestinationSlider.jsx";

const Homefirst = () => {
  return (
    <div className="main-first-section">
        <Slider />
        <DestinationSlider />
    </div>
  );
};

export default Homefirst;
