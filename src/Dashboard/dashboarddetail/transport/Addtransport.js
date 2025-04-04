import React, { useState } from "react";
import "./addtransport.css";

const Addtransport = () => {
  const [activeTab, setActiveTab] = useState("Manage Transport");
  return (
    <div className="transport-list-outer">
      <h1>Transport Details</h1>
      <div className="transport-tab-list">
        <button
          className={activeTab === "Manage Transport" ? "active" : ""}
          onClick={() => setActiveTab("Manage Transport")}>
          Manage Transport
        </button>
        <button
          className={activeTab === "Add Transport" ? "active" : ""}
          onClick={() => setActiveTab("Add Transport")}>
          Add Transport
        </button>
      </div>

      {activeTab === "Manage Transport" && (
        <div className="transport-list-boxes">
          <div className="transport-list-box">
            <img src="/Images/Transport/jeep.jpg" alt="img"></img>
            <span>
              <h2>Prado 2025</h2>
              <button>View Details</button>
            </span>
          </div>
          <div className="transport-list-box">
            <img src="/Images/Transport/jeep.jpg" alt="img"></img>
            <span>
              <h2>Jeep 4x4</h2>
              <button>View Detail</button>
            </span>
          </div>
          <div className="transport-list-box">
            <img src="/Images/Transport/jeep.jpg" alt="img"></img>
            <span>
              <h2>Prado V8</h2>
              <button>View Detail</button>
            </span>
          </div>
          <div className="transport-list-box">
            <img src="/Images/Transport/jeep.jpg" alt="img"></img>
            <span>
              <h2>Gli X 2021</h2>
              <button>View Detail</button>
            </span>
          </div>
        </div>
      )}
      {activeTab === "Add Transport" && (
        <div className="transport-adding-form">
          <div className="add-form-side">
            <form>
              <h2>Add Vehicles Form</h2>
              <span>
                <label>Vehicle Model</label>
                <input type="text" />
              </span>
              <span>
                <label>Per Day Charges</label>
                <input type="number" />
              </span>
              <span>
                <label>Per Day Charges</label>
                <input type="number" />
              </span>
            </form>
          </div>
          <div className="add-form-image">
            <img src="/images/Transport/car.webp" alt="img"></img>
            <img src="/images/Transport/64419.jpg" alt="img"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtransport;
