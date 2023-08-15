import React from 'react'
import '../styles/Dashboard.css'
import { NavLink } from 'react-router-dom';


function Dashboard() {
  return (

    <div className='dashboard'>
      <div className='dashContent'>
        <h1 className='m-4'>Welcome Owner</h1>
        <hr />
        <div className='dashCards'>
          <div className='apartmentsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-house-door-fill"></i>
            <h4>Total Apartments: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <NavLink to="/apartments" >
                <button className='btn btn-primary border shadow rounded'>Visit List</button>
              </NavLink>

            </div>
          </div>
          <div className='tenantsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-file-person-fill"></i>
            <h4>Total Tenants: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <NavLink to="/tenants" >
                <button className='btn btn-primary border shadow rounded'>Visit List</button>
              </NavLink>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard