import React from "react";
// import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import logo from "../images/RentWise.png";


const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
  // const users = [{ username: "username", password: "password" }];
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const account = users.find((user) => user.username === username);
  //   if (account && account.password === password) {
  //     setAuthenticated(true)
  //     localStorage.setItem("authenticated", true);
  //   }
  // }

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
            <button className="btn signinBtn">Sign in</button>
          </div>
          <Link to="/signup" className="d-flex justify-content-end mb-2">Forgot password</Link>
          <Link to="/signup" className="d-flex justify-content-end mb-2">Register here</Link>
        </form>
      </div>
    </div >
  );
}

export default Login;