import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import '../styles/Style.css'

function Home() {
  const [toggle, setToggle] = useState(false);
  function Toggle() {
    setToggle(!toggle);
  }
  return (
    <div className='d-flex home'>
      <div className={toggle ? 'd-none' : 'w-auto h-100 position-fixed'}>
        <Sidebar />
      </div>
      <div className={toggle ? 'd-none' : 'invisible'}>
        <Sidebar />
      </div>

      <div className='col'>
        <Navbar Toggle={Toggle} />
        <div className='pageContainer'>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Home