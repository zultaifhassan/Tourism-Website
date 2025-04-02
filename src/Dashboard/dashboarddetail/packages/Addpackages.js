import React, { useState } from "react";
import "./packages.css";
import { TfiClose } from "react-icons/tfi";
import Popup from "reactjs-popup";

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

      {activeTab === "Manage Packages" && (
        <div>
          <div className="packages-list-table">
            <tr>
              <th className="package-list-image">Images</th>
              <th className="package-list-price">Total Days</th>
              <th className="package-list-price">Price</th>
              <th className="package-list-areas">Visiting Areas</th>
              <th className="pacakge-list-action">Action</th>
            </tr>
            <tr>
              <td>
                <span>
                  <img src="/Images/Destination/de.jpg" alt="img"></img>
                </span>
              </td>
              <td>8 Days</td>
              <td>$ 1000</td>
              <td>
                Naran, Kaghan, Babusar, Hunza, Gilgit, Skardu, Astore, Ghizer,
                Naran, Kaghan, Babusar, Hunza, Gilgit, Skardu, Astore, Ghizer
              </td>
              <td className="package-list-detele-edit">
                <img src="/Images/dashboard/edit.png" alt="img" />
                <Popup
                  trigger={
                    <img src="/Images/dashboard/delete.png" alt="img"></img>
                  }
                  modal
                  nested
                  className="delete-popup-content">
                  {(close) => (
                    <div className="close-delete-name">
                      <h2>Do yau Want to Delete</h2>
                      <div className="popup-delete-botton">
                        <span>
                          <TfiClose
                            fontSize={30}
                            color="green"
                            cursor="Pointer"
                            onClick={() => close()}
                          />
                          <p>Cancel</p>
                        </span>
                        <span>
                          <img
                            src="/Images/dashboard/delete.png"
                            alt="img"></img>
                          <p>Delete</p>
                        </span>
                      </div>
                    </div>
                  )}
                </Popup>
              </td>
            </tr>
          </div>
        </div>
      )}
      {activeTab === "Add Packages" && <div>📊 Add Packages</div>}
    </div>
  );
};

export default Addpackages;
