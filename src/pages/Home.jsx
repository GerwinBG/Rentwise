import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import '../styles/Style.css'

function Home() {

  return (
    <div>
      <Navbar />
      <div className='home d-flex'>
        <div className='d-none d-lg-block'>
          <Sidebar />
        </div>
        <div className='homeContent d-flex justify-content-center align-items-center overflow-auto'>
          <Dashboard />
        </div>

      </div>


    </div>
  )
}

export default Home