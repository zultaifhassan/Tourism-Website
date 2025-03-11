import React from "react";
import "./contact.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <div className="contact-form">
        <div className="contact-left">
          <img src="/Images/contact/2046.jpg" alt="" />
        </div>
        <div className="contact-right">
          <form>
            <h2>Contact Us</h2>
            <div className="input-boxes">
              <div className="first-box">
                <label>Full Name</label>
                <span>
                  <img src="/Images/contact/user.png" alt="" />
                  <input type="text" placeholder="Enter Full Name" />
                </span>
              </div>
              <div className="first-box">
                <label>Eamil</label>
                <span>
                  <img src="/Images/contact/mail-02.png" alt="" />
                  <input type="text" placeholder="Enter Your Mail" />
                </span>
              </div>
              <div className="first-box">
                <label>Message</label>
                <span>
                  <img src="/Images/contact/lock.png" alt="" />
                  <input type="text" placeholder="Enter Your Message" />
                </span>
              </div>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-info-email-location">
        <div className="contact--mail-inner">
          <div className="loaction-info-icon">
            <span>
              <img src="/Images/contact/map-pin.svg" alt="" />
              <h2>Location</h2>
            </span>
            <p>123, Street Name, City, Country</p>
          </div>
          <div className="loaction-info-icon">
            <span>
              <img src="/Images/contact/phone.svg" alt="" />
              <h2>Phone</h2>
            </span>

            <p>+92 3567687979</p>
          </div>
          <div className="loaction-info-icon">
            <span>
              <img src="/Images/contact/mail.svg" alt="" />
              <h2>Mail</h2>
            </span>

            <p>karakoramsafari@gamil.com</p>
          </div>
        </div>
        <div style={{ height: "50vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "akjkf" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent
              lat={30.955413}
              lng={74.307844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Contact;
