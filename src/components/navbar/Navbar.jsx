import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className='navbar-inner'>
        <div className='nav-logo-side'>
            <h2>KarakoramSafari</h2>
        </div>
        <div className='nav-center-links'>
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='nav-book-button'>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar