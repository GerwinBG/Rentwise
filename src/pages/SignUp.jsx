import React from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
import logo from "../images/RentWise.png";

const SignUp = () => {
  return (
    <section className="signup">
      <div className="signupContainer">
        <div className="logo">
          <img src={logo} alt="Rentwise" />
        </div>
        <h3>SIGN UP</h3>

        <form className="signupForm p-4">
          <div className="innerLeft">
            <div className="mb-2">
              <label htmlFor="firstName">First Name</label>
              <input type="firstName" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="lastName" className="form-control" />
            </div>

            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="innerRight">
            <div className="mb-2">
              <label htmlFor="username">Username</label>
              <input type="username" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="contact">Contact No.</label>
              <input type="contact" className="form-control" />
            </div>


          </div>
        </form>

        <div className="btnSignup d-flex justify-content-center">
          <button className="btn signupBtn"><Link to="#">Sign Up</Link></button>
        </div>
        <p className="me-4 my-3">Already Registered? <Link to="#" >Sign in</Link></p>
      </div>


    </section>
  );
}

export default SignUp;