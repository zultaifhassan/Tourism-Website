import React from "react";
import "./offerdetail.css";
import Dropaccordian from "../Accordian/Package-Accordion/Dropaccordian";
import PDcalender from "../Accordian/Calanders/PDcalender";

const OffersDetail = () => {
  return (
    <div className="offerpackage-detail-page">
      <h1>Package Detail</h1>
      <div className="offer-dropdown-calender">
        <div className="accordian-drop">
          <Dropaccordian />
        </div>
        <div className="accordian-calender">
          <PDcalender />
        </div>
      </div>
    </div>
  );
};

export default OffersDetail;
