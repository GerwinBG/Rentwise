import React from 'react'
import { useState } from 'react';
import "../styles/Sidebar.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../images/RentWise.png";
import { Link, NavLink } from 'react-router-dom';



function Sidebar() {


  return (
    <div className='sideBar d-flex justify-content-start flex-column text-white py-3 ps-4 pe-4 vh-100'>
      <div className='webLogo'>
        <span className="brand p-3">
          <img src={logo} alt="Bootstrap" />
        </span>
      </div>
      <hr className='text-secondary' />
      <ul className='nav nav-pills flex-column mt-2'>
        <NavLink to="/" className='p-2 text-decoration-none text-white'>
          <li className='nav-item py-1'>
            <i className='bi bi-speedometer2 me-3 fs-4'></i>
            <span className='fs-4'><strong>Dashboard</strong></span>
          </li>
        </NavLink>
        <NavLink to="/apartments" className='p-2 text-decoration-none text-white'>
          <li className='nav-item py-1'>
            <i className='bi bi-house-door me-3 fs-4'></i>
            <span className='fs-4'><strong>Apartments</strong></span>
          </li>
        </NavLink>
        <NavLink to="/tenants" className='p-2 text-decoration-none text-white'>
          <li className='nav-item py-1'>
            <i className='bi bi-person-square me-3 fs-4'></i>
            <span className='fs-4'><strong>Tenants</strong></span>
          </li>
        </NavLink>
      </ul>
    </div>

  )
}

export default Sidebar