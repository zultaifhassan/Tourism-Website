import React from "react";
import "./tranport.css";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import VehicleBooking from "../Forms/VehicleBooking/VehicleBooking";

const Transport = () => {
  return (
    <div className="transport-page">
      <div className="transport-page-inner">
        <div className="transport-page-heading">
          <h2>Book an Affortable</h2>
          <h1>Transport</h1>
        </div>
        <div className="transport-grid-line">
          <div className="transport-boxes">
            <div className="transport-image">
              <img src="/Images/Transport/Prado.jpg" alt="" />
            </div>
            <div className="transport-details">
              <h2>Prado</h2>
              <div className="daily-rates">
                <h4>Per Day</h4>
                <h5>(Rs 15000-20000)</h5>
              </div>
              <div className="vehicle-capacity">
                <h4>
                  <MdAirlineSeatReclineNormal fontSize={25} color="green" />
                  Capacity
                </h4>
                <h5>3-4 Persons</h5>
              </div>
              <div className="vehicle-including">
                <div className="transport-includes">
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                </div>
                <div className="transport-includes">
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                </div>
              </div>
              <Popup trigger={<button>Book Now</button>} modal nested>
                {(close) => (
                  <div className="popu-booking-form">
                    <div className="close-button-name">
                      <div className="content">Book Transport You Want</div>
                      <div className="popup-close-botton">
                        <TfiClose
                          fontSize={25}
                          color="red"
                          cursor="Pointer"
                          onClick={() => close()}
                        />
                      </div>
                    </div>
                    <VehicleBooking />
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="transport-boxes">
            <div className="transport-image">
              <img src="/Images/Transport/Prado1.jpg" alt="" />
            </div>
            <div className="transport-details">
              <h2>Prado</h2>
              <div className="daily-rates">
                <h4>Per Day</h4>
                <h5>(Rs 15000-20000)</h5>
              </div>
              <div className="vehicle-capacity">
                <h4>
                  <MdAirlineSeatReclineNormal fontSize={25} color="green" />
                  Capacity
                </h4>
                <h5>3-4 Persons</h5>
              </div>
              <div className="vehicle-including">
                <div className="transport-includes">
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                </div>
                <div className="transport-includes">
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                </div>
              </div>
              <Popup trigger={<button>Book Now</button>} modal nested>
                {(close) => (
                  <div className="popu-booking-form">
                    <div className="close-button-name">
                      <div className="content">Book Transport You Want</div>
                      <div className="popup-close-botton">
                        <TfiClose
                          fontSize={25}
                          color="red"
                          cursor="Pointer"
                          onClick={() => close()}
                        />
                      </div>
                    </div>
                    <VehicleBooking />
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="transport-boxes">
            <div className="transport-image">
              <img src="/Images/Transport/jeep1.jpg" alt="" />
            </div>
            <div className="transport-details">
              <h2>Prado</h2>
              
              <div className="vehicle-capacity">
                <h4>
                  <MdAirlineSeatReclineNormal fontSize={25} color="green" />
                  Capacity
                </h4>
                <h5>3-4 Persons</h5>
              </div>
              <div className="vehicle-including">
                <div className="transport-includes">
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <IoCheckmark fontSize={22} color="green" />
                    <h4>Driver</h4>
                  </span>
                </div>
                <div className="transport-includes">
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Fuel</h4>
                  </span>
                  <span>
                    <RxCross2 fontSize={21} color="Red" />
                    <h4>Driver</h4>
                  </span>
                </div>
                
              </div>
              <div className="daily-rates">
                <h4>Per Day</h4>
                <h5>(Rs 15000-20000)</h5>
              </div>
              <Popup trigger={<button>Book Now</button>} modal nested>
                {(close) => (
                  <div className="popu-booking-form">
                    <div className="close-button-name">
                      <div className="content">Book Transport You Want</div>
                      <div className="popup-close-botton">
                        <TfiClose
                          fontSize={25}
                          color="red"
                          cursor="Pointer"
                          onClick={() => close()}
                        />
                      </div>
                    </div>
                    <VehicleBooking />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
