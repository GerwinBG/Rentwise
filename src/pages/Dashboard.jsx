import React from 'react'
import '../styles/Dashboard.css'


function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashContent m-5 p-4 rounded '>
        <h1>Welcome Owner</h1>
        <hr class />
        <div className='dashCards'>
          <div className='apartmentsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i class="bi bi-house-door-fill"></i>
            <h4>Total Apartments: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <button className='btn border shadow rounded'>Visit List</button>
            </div>
          </div>

          <div className='tenantsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i class="bi bi-file-person-fill"></i>
            <h4>Total Apartments: <b>0</b></h4>
            <div className='d-flex justify-content-end'>
              <button className='btn border shadow rounded'>Visit List</button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard