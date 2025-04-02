import React from "react";
import "./choose.css";
import { FaMedal } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";

const Choose = () => {
  return (
    <div className="choose-outer-div">
      <div className="choose-inner-div">
        <span>
          <h1>Why Choose Us</h1>
          <p>
            Choose us for Expert travel team, best prices, trusted service,
            <br /> unforgettable experiences, and sustainable adventures
          </p>
        </span>
        <div className="choose-boxes-list">
          <div className="choose-box1">
            <span>
              <FaMedal fontSize={50} color="#03ABEA" />
            </span>
            <h2>Best Price Guarantee</h2>
            <p>
              Best price guarantee, affordable adventures, quality service, and
              unforgettable experiences.
            </p>
          </div>
          <div className="choose-box1">
            <span>
              <MdHeadsetMic fontSize={50} color="#03ABEA" />
            </span>
            <h2>24-7 Support</h2>
            <p>
              Our travel team provides dedicated support, prompt assistance,
              reliable service, and customer satisfaction.
            </p>
          </div>
          <div className="choose-box1">
            <span>
              <AiFillSafetyCertificate fontSize={50} color="#03ABEA" />
            </span>
            <h2>Safe Booking</h2>
            <p>
              Your payments are safe with industry-leading encryption and secure
              processing.
            </p>
          </div>
          <div className="choose-box1">
            <span>
              <FaHeart fontSize={50} color="#03ABEA" />
            </span>
            <h2>Trusted by Millions</h2>
            <p>
            Over thousands of happy travelers choose us for safe, memorable, and extraordinary journeys every year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
