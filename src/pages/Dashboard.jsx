import React from 'react'
import '../styles/Dashboard.css'


function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashContent container my-5 rounded'>
        <h1>Welcome Owner</h1>
        <hr class />
        <div className='dashCards'>
          <div className='apartmentsQty border shadow rounded'>
            <h1>TAngina</h1>
          </div>
          <div className='tenantsQty border shadow rounded'>
            <h1>TAngina</h1>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard