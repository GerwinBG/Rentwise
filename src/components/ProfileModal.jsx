import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"


function ProfileModal() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      newPassword: '',
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

  return (
    <div className="modal fade" id="profileModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="profileModal">Profile</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className='my-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text"
                  className="form-control"
                  id='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                  className='form-control'
                  id='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='my-3'>
                <label htmlFor="price" className="form-label">New Password</label>
                <input type="password"
                  className="form-control"
                  id='newPassword'
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="closeBtn btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal