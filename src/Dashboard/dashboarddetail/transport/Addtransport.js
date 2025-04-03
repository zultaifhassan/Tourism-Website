import React, { useState } from "react";
import './addtransport.css'

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
                  <h2>$ 2000</h2>
                  <button>Read More</button>
                </span>
            </div>
            <div className="transport-list-box">
                <img src="/Images/Transport/jeep.jpg" alt="img"></img>
                <span>
                  <h2>$ 2000</h2>
                  <button>Read More</button>
                </span>
            </div>
            <div className="transport-list-box">
                <img src="/Images/Transport/jeep.jpg" alt="img"></img>
                <span>
                  <h2>$ 2000</h2>
                  <button>Read More</button>
                </span>
            </div>
            <div className="transport-list-box">
                <img src="/Images/Transport/jeep.jpg" alt="img"></img>
                <span>
                  <h2>$ 2000</h2>
                  <button>Read More</button>
                </span>
            </div>
        </div>
      )}
      {activeTab === "Add Transport" && (
        <div>Add Transport</div>
      )}
    </div>
  );
};

export default Addtransport;
