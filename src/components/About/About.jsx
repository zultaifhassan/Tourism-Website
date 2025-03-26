import React from "react";
import "./about.css";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

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
          Our experienced team of travel experts is dedicated to making
          <br /> your journey unforgettable.
        </p>
        <div className="team-member-boxes">
          <div className="team-box-1">
            <img src="/Images/about/men.jpg" alt="" />
            <div className="team-member-detail">
              <h2>Zultaif Hassan</h2>
              <div className="desigination-social">
                <p>CEO & Founder</p>
                <div className="team-member-sociallinks">
                  <FiFacebook fontSize={25} color="#0862F7" cursor="pointer" />
                  <BsInstagram fontSize={25} color="purple" cursor="pointer" />
                  <BsTwitterX fontSize={25} color="black" cursor="pointer" />
                  <GrLinkedin fontSize={25} color="#0C61BF" cursor="pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="team-box-1">
            <img src="/Images/about/men.jpg" alt="" />
            <div className="team-member-detail">
              <h2>Zultaif Hassan</h2>
              <div className="desigination-social">
                <p>CEO & Founder</p>
                <div className="team-member-sociallinks">
                  <FiFacebook fontSize={25} color="#0862F7" cursor="pointer" />
                  <BsInstagram fontSize={25} color="purple" cursor="pointer" />
                  <BsTwitterX fontSize={25} color="black" cursor="pointer" />
                  <GrLinkedin fontSize={25} color="#0C61BF" cursor="pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="team-box-1">
            <img src="/Images/about/men.jpg" alt="" />
            <div className="team-member-detail">
              <h2>Sohail Abbas</h2>
              <div className="desigination-social">
                <p>Graphic Designer</p>
                <div className="team-member-sociallinks">
                  <FiFacebook fontSize={25} color="#0862F7" cursor="pointer" />
                  <BsInstagram fontSize={25} color="purple" cursor="pointer" />
                  <BsTwitterX fontSize={25} color="black" cursor="pointer" />
                  <GrLinkedin fontSize={25} color="#0C61BF" cursor="pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Values-section">
        <h1>Our Values</h1>
        <span>
          <div className="passion-box">
            <span>
              <FaHeart fontSize={50} color="blue" />
            </span>
            <h2>Passion</h2>
            <p>
              Passion for adventure, exploration, nature, and unforgettable
              experiences.
            </p>
          </div>
          <div className="passion-box">
            <span>
              <AiFillSafetyCertificate fontSize={50} color="blue" />
            </span>
            <h2>Trust</h2>
            <p>
              Committed to trust, safety, reliability, authenticity, and
              exceptional travel experiences
            </p>
          </div>
          <div className="passion-box">
            <span>
              <FaStar fontSize={50} color="blue" />
            </span>
            <h2>Excellence</h2>
            <p>
              Dedicated to excellence, quality, innovation, customer
              satisfaction, and unforgettable adventures.
            </p>
          </div>
          <div className="passion-box">
            <span>
              <FaGlobeAmericas fontSize={50} color="blue" />
            </span>
            <h2>Sustainability</h2>
            <p>
              Promoting sustainability through eco-friendly tourism,
              conservation, responsible travel, and environmental awareness.
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default About;
