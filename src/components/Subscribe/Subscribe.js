import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subsribe-mail">
      <h2>
        Subscribe to get information, latest news and other <br />
        interesting offers about Karakoram Safari
      </h2>
      <div className="subscribe-input">
        <div className="input-icon">
            <img src="/Images/home/mail.png" alt="" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
