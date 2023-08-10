import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/Tenants.css'

function Tenants() {

  return (

    <div className='d-flex tenants'>
      <Sidebar />
      <div className='col overflow-auto'>
        <Navbar />
        <div>

        </div>
      </div>
    </div>

  )
}

export default Tenants