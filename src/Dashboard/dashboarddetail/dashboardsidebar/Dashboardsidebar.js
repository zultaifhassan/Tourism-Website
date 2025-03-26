import React from 'react'
import { Link } from 'react-router-dom'

const Dashboardsidebar = () => {
  return (
    <div className='dash-side-bar'>
      <div className='dash-logo'>
        <img src='/Images/logo.png'></img>
      </div>
        <Link to="dash-detail">
            <h1 color='red'>click</h1>
        </Link>
        <Link to="orders">
            <h1 color='red'>click</h1>
        </Link>
    </div>
  )
}

export default Dashboardsidebar