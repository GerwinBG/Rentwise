import React, { useState } from 'react'
import "../styles/Sidebar.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';



function Sidebar() {

  return (

    <div className='sideBar d-flex flex-column text-white py-3 ps-4 pe-4'>

      <hr className='text-secondary' />
      <ul className='nav nav-pills flex-column mt-2' >
        <NavLink to="/" className='my-1 p-2 text-decoration-none' >
          <li className='nav-item py-1'>
            <i className='bi bi-speedometer2 me-3 fs-4'></i>
            <span className='fs-4'><strong>Dashboard</strong></span>
          </li>
        </NavLink>
        <NavLink to="/apartments" className='my-1 p-2 text-decoration-none' >
          <li className='nav-item py-1' >
            <i className='bi bi-house-door me-3 fs-4'></i>
            <span className='fs-4'><strong>Apartments</strong></span>
          </li>
        </NavLink>
        <NavLink to="/tenants" className='my-1 p-2 text-decoration-none' >
          <li className='nav-item py-1' >
            <i className='bi bi-person-square me-3 fs-4'></i>
            <span className='fs-4'><strong>Tenants</strong></span>
          </li>
        </NavLink>
      </ul>
    </div>

  )
}

export default Sidebar