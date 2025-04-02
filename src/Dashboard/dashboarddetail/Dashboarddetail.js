import React from "react";
import "./dashboarddetail.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";
import { TbBus } from "react-icons/tb";

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
            <AiFillDollarCircle />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Bookings</p>
          </div>
          <div className="earning-logo">
            <LuCalendarCheck2 />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Clients</p>
          </div>
          <div className="earning-logo">
            <HiUsers />
          </div>
        </div>
        <div className="dashboard-detail-box1">
          <div className="total-earning-section">
            <h1>200k</h1>
            <p>Total Vehicles</p>
          </div>
          <div className="earning-logo">
            <TbBus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboarddetail;
