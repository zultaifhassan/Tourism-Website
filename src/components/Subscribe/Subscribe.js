import React from "react";
import "./subscribe.css";
import { IoMailOutline } from "react-icons/io5";

const Subscribe = () => {
  return (
    <div className="subsribe-mail">
      <h2>
        Subscribe to get information, latest news and other <br />
        interesting offers about Karakoram Safari
      </h2>
      <div className="subscribe-input">
        <div className="input-icon">
          <IoMailOutline fontSize={30} />
          <input type="email" placeholder="Enter your email" />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
