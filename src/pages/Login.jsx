import React from "react";

const Login = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-h">
      <div className="40-w p-5 rounded bg-unite border shadow">
        <form>
          <h3>Sign In</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="username" placeholder="Enter Username" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" />
          </div>
          <div className="d-flex justify-content-end">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <a className="d-flex justify-content-end">Register here</a>
        </form>
      </div>
    </div>
  );
}

export default Login;