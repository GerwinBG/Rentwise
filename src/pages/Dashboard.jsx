import React from 'react'
import "../styles/Dashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../components/Sidebar';




function Dashboard() {
  return (
    <div className='dashboard d-flex'>
      <section className='w-auto'>
        <Sidebar />
      </section>
    </div>
  )
}

export default Dashboard