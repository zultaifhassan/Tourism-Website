import React from "react";
import "./offerdetail.css";
import Dropaccordian from "../Accordian/Package-Accordion/Dropaccordian";

const OffersDetail = ({ items }) => {
  return (
    <div className="offerpackage-detail-page">
      <h1>Package Detail</h1>
      <div className="offer-dropdown">
        <Dropaccordian />
      </div>
    </div>
  );
};

export default OffersDetail;
