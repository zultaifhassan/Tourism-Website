import React from "react";
import "./vehiclebooking.css";
import { LiaUserSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { TbBrandDaysCounter } from "react-icons/tb";

const VehicleBooking = () => {
  return (
    <div className="vehicle-booking-form">
      <form>
        <span>
          <div className="icon-users-name">
            <LiaUserSolid />
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="icon-users-name">
            <LiaUserSolid />
            <input type="text" placeholder="Fathers Name" />
          </div>
        </span>
        <span>
          <div className="icon-users-name">
            <CiMail />
            <input type="text" placeholder="Email" />
          </div>
          <div className="icon-users-name">
            <PiWhatsappLogoThin />
            <input type="number" placeholder="Phone Number" />
          </div>
        </span>
        <span>
          <div className="icon-users-name">
            <IoCarSportOutline fontSize={25} />
            <select name="cars" id="cars">
              <option value="Select Model" selected disabled>
                Select Model
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="icon-users-name">
            <TbBrandDaysCounter />
            <input type="number" placeholder="Total Days" />
          </div>
        </span>
        <div className="select-dates-from">
          <h1>Select Dates</h1>
          <span>
            <div className="selected-date-duration">
              <p>From</p>
              <div className="icon-users-name">
                <input type="date" placeholder="From" />
              </div>
            </div>
            <div className="selected-date-duration">
              <p>To</p>
              <div className="icon-users-name">
                <input type="date" placeholder="To" />
              </div>
            </div>
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default VehicleBooking;
