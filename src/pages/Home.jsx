import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import '../styles/Style.css'

function Home() {

  return (
    <div className='d-flex home'>
      <Sidebar />
      <div className='col overflow-auto'>
        <Navbar />
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Home