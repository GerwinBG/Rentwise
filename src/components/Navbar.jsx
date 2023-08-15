import React, { useState } from 'react'
import "../styles/Navbar.css";
import logo from "../images/RentWise.png";
import Sidebar from './Sidebar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffcanvasBody } from 'react-bootstrap/esm';




function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <nav className="d-flex justify-content-between">
      <div className='d-lg-none d-flex align-items-center ms-3 '>
        <button className='btn'> <i className="bi bi-caret-right-square-fill fs-2 text-white" onClick={handleShow}></i></button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div className='d-flex justify-content-center'>
            <Offcanvas.Title>
              <img src={logo} style={{ width: "12rem", backgroundColor: "#f0dcc0", marginLeft: "1rem" }} />
            </Offcanvas.Title>
          </div>
        </Offcanvas.Header>
        <OffcanvasBody>
          <Sidebar />
        </OffcanvasBody>
      </Offcanvas>
      <div className='d-none d-lg-block mx-5'>
        <img src={logo} alt="" />
      </div>

      <div className='navBtn d-flex align-items-center'>
        <button className='btn btn-primary mx-3 fs-4'><i className="bi bi-person-fill-gear fs-4 me-2"></i>Profile</button>
        <button className='btn btn-primary mx-3 fs-4'><i className="bi bi-door-open-fill fs-4 me-2"></i>Logout</button>
      </div>

    </nav >





  )
}

export default Navbar