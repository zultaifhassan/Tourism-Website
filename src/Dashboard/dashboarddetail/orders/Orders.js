import React from "react";
import "./order.css";

const Orders = () => {
  return (
    <div className="order-details-outer">
      <h1>Orders List</h1>
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
            <td>Zultaif Hassan</td>
            <td>10-04-2025</td>
            <td>8 Days</td>
            <td className="status-news"><span>Pending</span></td>
            <td>03495419344</td>
            <td>zultaifhassan110@gmail.com</td>
            <td>Bunji House Near Post Office</td>
            <td className="action-icons-editdel">
              <img src="/Images/dashboard/edit.png" alt="img" />
              <img src="/Images/dashboard/delete.png" alt="img"></img>
            </td>
          </tr>
          <tr>
            <td>Zultaif Hassan</td>
            <td>10-04-2025</td>
            <td>8 Days</td>
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
