import React from "react";
import "../styles/Login.css";

import logo from "../images/RentWise.png";


const Login = () => {


  return (
    <div className="login" >
      <div className="form">
        <div className="logo">
          <img src={logo} alt="Rentwise" />
        </div>
        <h3>Sign In</h3>
        <form className="p-4">
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="username" placeholder="Enter Username" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" />
          </div>
          <div className="d-flex justify-content-end mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid mb-2">
            <button className="btn signinBtn"><a>Sign in</a></button>
          </div>
          <a className="d-flex justify-content-end mb-2">Forgot password</a>
          <a className="d-flex justify-content-end mb-2">Register here</a>
        </form>
      </div>
    </div >
  );
}

export default Login;