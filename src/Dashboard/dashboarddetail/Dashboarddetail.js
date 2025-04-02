import React from "react";
import "./dashboarddetail.css";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { LuCalendarCheck } from "react-icons/lu";

const Dashboarddetail = () => {
  return (
    <div className="dashborad-main-page">
      <div className="dashboard-wellcomenote">
        <h2>
          Wellcome To <span>Karakoram Safari</span>
        </h2>
      </div>
      <div className="dashborad-detail-list">
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Earnings</p>
          </div>
          <div className="earning-logo">
            <HiOutlineCurrencyDollar />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Bookings</p>
          </div>
          <div className="earning-logo">
            <LuCalendarCheck />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Earnings</p>
          </div>
          <div className="earning-logo">
            <HiOutlineCurrencyDollar />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Earnings</p>
          </div>
          <div className="earning-logo">
            <HiOutlineCurrencyDollar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboarddetail;
