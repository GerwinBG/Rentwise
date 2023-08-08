import React from 'react'
import { useState } from 'react';
import "../styles/Sidebar.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../images/RentWise.png";


function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <div className='sideBar d-flex justify-content-start flex-column bg-dark text-white py-3 ps-4 pe-4 vh-100'>
      <div className='webLogo'>
        <span className="brand p-3">
          <img src={logo} alt="Bootstrap" />
        </span>
      </div>
      <hr className='text-secondary' />
      <ul className='nav nav-pills flex-column mt-2'>
        <li className={active === 1 ? 'active nav-item py-3' : 'nav-item py-3'}
          onClick={e => setActive(1)}>
          <span className='p-2'>
            <i className='bi bi-speedometer2 me-3 fs-4'></i>
            <span className='fs-4'><strong>Dashboard</strong></span>
          </span>
        </li>
        <li className={active === 2 ? 'active nav-item py-3' : 'nav-item py-3'}
          onClick={e => setActive(2)}>
          <span className='p-2'>
            <i className='bi bi-house-door me-3 fs-4'></i>
            <span className='fs-4'><strong>Apartments</strong></span>
          </span>
        </li>
        <li className={active === 3 ? 'active nav-item py-3' : 'nav-item py-3'}
          onClick={e => setActive(3)}>
          <span className='p-2'>
            <i className='bi bi-person-square me-3 fs-4'></i>
            <span className='fs-4'><strong>Tenants</strong></span>
          </span>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar