import React, { useState } from "react";
import "./packages.css";

const Addpackages = () => {
  const [activeTab, setActiveTab] = useState("Manage Packages");
  return (
    <div className="packages-tables-outer">
      <h1>Packages Details</h1>
      <div className="pacakes-tab-list">
        <button
          className={activeTab === "Manage Packages" ? "active" : ""}
          onClick={() => setActiveTab("Manage Packages")}>
          Manage Packages
        </button>
        <button
          className={activeTab === "Add Packages" ? "active" : ""}
          onClick={() => setActiveTab("Add Packages")}>
          Add Packages
        </button>
      </div>

      {activeTab === "Manage Packages" && <div>📊 Manage Packages</div>}
      {activeTab === "Add Packages" && <div>📊 Add Packages</div>}
    </div>
  );
};

export default Addpackages;
