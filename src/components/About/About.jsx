import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about-us-outerdiv">
        <div className="about-us-innerdiv">
          <span>
            <h1>Discover Our Story</h1>
            <p>
              Explore the world, embrace new adventures—every journey tells a
              story. Since 2023, <br />
              we've been guiding travelers to unforgettable experiences!
            </p>
          </span>
        </div>
      </div>
      <div className="counter-clients">
        <div className="counter-leftside-image">
          <img src="/Images/Destination/de.jpg" alt="" />
        </div>
        <div className="counter-rightside-count">
          <h1>Who We Are</h1>
          <p>
            KarakoramSafari is a premium travel agency dedicated to creating
            extraordinary journeys for adventurous souls. With 5 years of
            experience, we've helped thousands of travelers explore the world's
            most captivating destinations.
          </p>
          <div className="counter-destination-clients">
              <span>
                <h2>5+</h2>
                <p>Years Experience</p>
              </span>
              <span>
                <h2>5k+</h2>
                <p>Happy Clients</p>
              </span>
              <span>
                <h2>100+</h2>
                <p>Destinations</p>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
