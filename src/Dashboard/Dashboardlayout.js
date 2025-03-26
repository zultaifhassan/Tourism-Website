import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboardsidebar from './dashboarddetail/dashboardsidebar/Dashboardsidebar'
import './dashlayout.css'

const Dashboardlayout = () => {
  return (
    <div className='layout-main'>
        <div className='layout-leftside'>
            <Dashboardsidebar />
        </div>
        <div className='layout-rightside'>
          <div className='layout-topbar'>
            topbar
          </div>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboardlayout