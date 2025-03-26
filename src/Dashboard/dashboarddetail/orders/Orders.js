import React from "react";
import "./order.css";

const Orders = () => {
  return (
    <div className="order-details-outer">
      <h1>Orders List</h1>
      <div className="order-table">
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Zultaif Hassan</td>
            <td>10-04-2025</td>
            <td className="status-news"><span>Pending</span></td>
            <td>03495419344</td>
            <td>zultaifhassan110@gmail.com</td>
            <td>Bunji House Near Post Office</td>
            <td className="action-icons-editdel">
              <img src="/Images/dashboard/edit.png" alt="img" />
              <img src="/Images/dashboard/delete.png" alt="img"></img>
            </td>
          </tr>
      </div>
    </div>
  );
};

export default Orders;
