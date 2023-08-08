import React from 'react'
import logo from "../images/RentWise.png";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar px-3">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" />
        </a>
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Owner
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
            </li>

            <li>Another action</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar