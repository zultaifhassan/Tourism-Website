import React from "react";
import "./home.css";
import Slider from "../Sliders/Mainslider/Mainslider.jsx";
import DestinationSlider from "../Sliders/DesSlider/DestinationSlider.jsx";
import Services from '../homefirst/Services/Services.jsx'
import Testimonals from "../Sliders/testimonals/Testimonals.jsx";
import Transport from "../Transport/Transport.jsx";

const Homefirst = () => {
  return (
    <div className="main-first-section">
        <Slider />
        <DestinationSlider />
        <Services />
        <Transport />
        <Testimonals />
    </div>
  );
};

export default Homefirst;
