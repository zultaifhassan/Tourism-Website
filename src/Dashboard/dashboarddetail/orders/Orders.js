import React, { useState } from "react";
import "./order.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { TfiClose } from "react-icons/tfi";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Transport Orders");

  return (
    <div className="order-details-outer">
      <h1>Orders List</h1>
      <div className="tabs-container-orders">
        <div className="orders-tabs-list">
          <button
            className={activeTab === "Transport Orders" ? "active" : ""}
            onClick={() => setActiveTab("Transport Orders")}>
            Transport Orders
          </button>
          <button
            className={activeTab === "Package Orders" ? "active" : ""}
            onClick={() => setActiveTab("Package Orders")}>
            Package Orders
          </button>
          <button
            className={activeTab === "Customize Packages" ? "active" : ""}
            onClick={() => setActiveTab("Customize Packages")}>
            Customize Packages
          </button>
        </div>
      </div>
      {activeTab === "Transport Orders" && (
        <div className="order-table">
          <tr>
            <th className="name-attribute">Name</th>
            <th className="date-attribute">Date</th>
            <th className="toald-attribute">Total.D</th>
            <th className="status-attribute">Status</th>
            <th className="number-attribute">Mobile No</th>
            <th className="email-attribute">Email</th>
            <th className="address-attribute">Address</th>
            <th className="action-attribute">Action</th>
          </tr>
          <tr>
            <td>
              <Link>Zultaif Hassan</Link>
            </td>
            <td>10-04-2025</td>
            <td>8 Days</td>
            <td className="status-news">
              <span>Pending</span>
            </td>
            <td>03495419344</td>
            <td>zultaifhassan110@gmail.com</td>
            <td>Bunji House Near Post Office</td>
            <td className="action-icons-editdel">
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
                        <img src="/Images/dashboard/delete.png" alt="img"></img>
                        <p>Delete</p>
                      </span>
                    </div>
                  </div>
                )}
              </Popup>
            </td>
          </tr>
          <tr>
            <td>
              <Link>Zultaif Hassan</Link>
            </td>
            <td>10-04-2025</td>
            <td>8 Days</td>
            <td className="status-news">
              <span>Pending</span>
            </td>
            <td>03495419344</td>
            <td>zultaifhassan110@gmail.com</td>
            <td>Bunji House Near Post Office</td>
            <td className="action-icons-editdel">
              <img src="/Images/dashboard/edit.png" alt="img" />
              <img src="/Images/dashboard/delete.png" alt="img"></img>
            </td>
          </tr>
        </div>
      )}
      {activeTab === "Package Orders" && <div>🛒 Orders Content</div>}
      {activeTab === "Customize Packages" && <div>📦 Packages Content</div>}
    </div>
  );
};

export default Orders;
