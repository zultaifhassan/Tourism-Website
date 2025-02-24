import React from "react";
import "./home.css";
import Slider from "../Sliders/Mainslider/Mainslider.jsx";
import DestinationSlider from "../Sliders/DesSlider/DestinationSlider.jsx";
import Services from '../homefirst/Services/Services.jsx'
import Testimonals from "../Sliders/testimonals/Testimonals.jsx";

const Homefirst = () => {
  return (
    <div className="main-first-section">
        <Slider />
        <DestinationSlider />
        <Services />
        <Testimonals />
    </div>
  );
};

export default Homefirst;
