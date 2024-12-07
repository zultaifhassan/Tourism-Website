import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="contact-left">
        <img src="/Images/logo.png" alt="" />
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
              <label>Password</label>
              <span>
                <img src="/Images/contact/lock.png" alt="" />
                <input type="text" placeholder="Enter Your Password" />
              </span>
            </div>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact