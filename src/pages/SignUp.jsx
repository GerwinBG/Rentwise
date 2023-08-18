import React from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
import logo from "../images/RentWise.png";
import { useFormik } from "formik";
import * as Yup from "yup"

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      contact: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
      password: Yup.string().min(8, 'must be at least 8 characters long').required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Password not match")
        .required("Confirm password is required"),
      email: Yup.string().required("This field is required"),
      contact: Yup.number().required("This field is required"),

    }),
    onSubmit: (value) => {
      console.log(value);
    }

  })
  return (
    <section className="signup">
      <div className="signupContainer py-1">
        <div className="logo">
          <img src={logo} alt="Rentwise" />
        </div>
        <h3>SIGN UP</h3>

        <form className="signupForm px-3" onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <label htmlFor="firstName">Full Name</label>
            <input type="name"
              className="form-control"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {
              formik.errors.name && <span className="text-danger">{formik.errors.name}</span>
            }
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="username"
              className="form-control"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {
              formik.errors.username && <span className="text-danger">{formik.errors.username}</span>
            }
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password"
              className="form-control"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {
              formik.errors.password && <span className="text-danger">{formik.errors.password}</span>
            }
          </div>
          <div className="mb-2">
            <label htmlFor="password">Confirm Password</label>
            <input type="password"
              className="form-control"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {
              formik.errors.confirmPassword && <span className="text-danger">{formik.errors.confirmPassword}</span>
            }
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email"
              className="form-control"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {
              formik.errors.email && <span className="text-danger">{formik.errors.email}</span>
            }
          </div>

          <div className="mb-2">
            <label htmlFor="contact">Contact No.</label>
            <input type="number"
              className="form-control"
              id="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
            />
            {
              formik.errors.contact && <span className="text-danger">{formik.errors.contact}</span>
            }
          </div>
          <div className="btnSignup d-flex justify-content-center">
            <button type="submit" className="btn signupBtn">Sign Up</button>
          </div>
        </form>


        <p className="me-4 my-3">Already Registered? <Link to="/login" >Sign in</Link></p>
      </div>


    </section>
  );
}

export default SignUp;