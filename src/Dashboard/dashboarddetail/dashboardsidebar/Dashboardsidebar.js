import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="d" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <span>
            <RxDashboard />
            Dashboards
          </span>
        </NavLink>
        <NavLink to="orders" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <span>
            <IoBagHandleOutline />
            Orders
          </span>
        </NavLink>
        <NavLink to="Packages" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <span>
            <VscPackage />
            Packages
          </span>
        </NavLink>
        <NavLink to="transport" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <span>
            <LiaTruckSolid />
            Transports
          </span>
        </NavLink>
        <NavLink to="review" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <span>
            <GoCodeReview />
            Customer Reviews
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboardsidebar;
