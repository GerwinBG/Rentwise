import React from 'react'
import '../styles/Dashboard.css'


function Dashboard() {
  return (

    <div className='dashboard container-fluid'>
      <div className='dashContent rounded '>
        <h1 className='m-4'>Welcome Owner</h1>
        <hr />
        <div className='dashCards container'>
          <div className='apartmentsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-house-door-fill"></i>
            <h4>Total Apartments: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary border shadow rounded'>Visit List</button>
            </div>
          </div>

          <div className='tenantsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-file-person-fill"></i>
            <h4>Total Tenants: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary border shadow rounded'>Visit List</button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard