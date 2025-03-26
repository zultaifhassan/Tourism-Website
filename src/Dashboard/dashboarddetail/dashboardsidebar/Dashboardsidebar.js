import React from "react";
import { Link } from "react-router-dom";
import "./dashboardsidebar.css";
import { RxDashboard } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { VscPackage } from "react-icons/vsc";
import { LiaTruckSolid } from "react-icons/lia";
import { GoCodeReview } from "react-icons/go";

const Dashboardsidebar = () => {
  return (
    <div className="dash-side-bar">
      <div className="dash-logo">
        <img src="/Images/logo.png" alt="img"></img>
      </div>
      <div className="dashboard-links">
        <Link to="">
          <span>
            <RxDashboard />
            Dashboards
          </span>
        </Link>
        <Link to="orders">
          <span>
            <IoBagHandleOutline />
            Orders
          </span>
        </Link>
        <Link to="orders">
          <span>
            <VscPackage />
            Packages
          </span>
        </Link>
        <Link to="orders">
          <span>
            <LiaTruckSolid />
            Transports
          </span>
        </Link>
        <Link to="orders">
          <span>
            <GoCodeReview />
            Customer Reviews
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboardsidebar;
