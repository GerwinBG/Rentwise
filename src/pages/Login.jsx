import React from "react";
import "../styles/Login.css";
import logo from "../images/RentWise.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"



const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required*"),
      password: Yup.string().required("Password is required*"),
    }),
    onSubmit: (value) => {
      console.log(value);
    }
  })

  return (
    <div className="login" >
      <div className="form">
        <div className="logo">
          <img src={logo} alt="Rentwise" />
        </div>
        <h3>Sign In</h3>
        <form className="p-4" autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input type="username"
              placeholder="Enter Username"
              className="form-control"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {
              formik.errors.username && <span className="text-danger">{formik.errors.username}</span>
            }
          </div>
          <div className="pb-4">
            <label htmlFor="password">Password</label>
            <input type="password"
              placeholder="Enter Password"
              className="form-control"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {
              formik.errors.password && <span className="text-danger">{formik.errors.password}</span>
            }
          </div>
          <div className="d-grid">
            <button type="submit" className="btn signinBtn">Sign in</button>
          </div>
        </form>

        <div className="d-flex justify-content-end  me-4">
          <input type="checkbox" className="custom-control custom-checkbox" id="check" />
          <label htmlFor="check" className="custom-input-label">
            Remember me
          </label>
        </div>
        <div className="text-align-end mb-4 me-4">
          <Link className="d-flex justify-content-end mb-2" to="/signup">Register here</Link>
        </div>
      </div>
    </div >
  );
}

export default Login;