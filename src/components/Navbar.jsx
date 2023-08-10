import React from 'react'
import "../styles/Navbar.css";



function Navbar({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-block " href="#">Dashboard</a>
        <a className="navbar-brand d-block d-md-none" onClick={Toggle}>
          <i className='bi bi-justify'></i>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 border rounded">
              <a className="nav-link text-white fs-5" aria-current="page" href="#"><i className="bi bi-person-fill-gear fs-5 me-1"></i>Account</a>
            </li>
            <li className="nav-item mx-3 border rounded">
              <a className="nav-link text-white fs-5" aria-current="page" href="#"><i className="bi bi-door-open-fill fs-5 me-1"></i>Logout</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar