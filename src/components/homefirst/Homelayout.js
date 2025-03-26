import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Homelayout = () => {
  return (
    <div className='home-layout'>
        <Navbar />
            <Outlet />
        <Footer />
    </div>
  )
}

export default Homelayout