import React from "react";
import "./about.css";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

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
          <img src="/Images/Destination/female.jpg" alt="" />
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
      <div className="team-section">
        <h1>Meet Our Team</h1>
        <p>
          Our experienced team of travel experts is dedicated to making your
          journey unforgettable.
        </p>
        <div className="team-member-boxes">
          <div className="team-box-1">
            <img src="/Images/about/men.jpg" alt="" />
            <div className="team-member-detail">
              <h2>Zultaif Hassan</h2>
              <div className="desigination-social">
                <p>CEO & Founder</p>
                <div className="team-member-sociallinks">
                  <FiFacebook fontSize={25} color="#0862F7" />
                  <BsInstagram fontSize={25} color="purple" />
                  <BsTwitterX fontSize={25} color="black" />
                  <GrLinkedin fontSize={25} color="#0C61BF" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
