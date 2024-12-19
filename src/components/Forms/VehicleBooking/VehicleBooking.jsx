import React from "react";
import "./vehiclebooking.css";

const VehicleBooking = () => {
  return (
    <div className="vehicle-booking-form">
      <form>
        <span>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Fathers Name" />
        </span>
        <span>
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
        </span>
        <span>
          <select name="cars" id="cars">
            <option value="Select Model">Select Model</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input type="number" placeholder="Total Days" />
        </span>
        <div className="select-dates-from">
          <h1>Select Dates</h1>
          <span>
            <input type="date" placeholder="From" />
            <input type="date" placeholder="To" />
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default VehicleBooking;
