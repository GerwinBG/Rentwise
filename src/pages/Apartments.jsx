import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/Apartment.css';

function Apartments() {

  return (
    <div className='d-flex apartment'>
      <Sidebar />
      <div className='col overflow-auto'>
        <Navbar />
        <div>
          <h1>Apartment</h1>
        </div>
      </div>
    </div>

  )
}

export default Apartments