import { useFormik } from 'formik'
import React from 'react'

function TenantModal() {
  const formik = useFormik({
    initialValues: {
      name: '',
      tenantEmail: '',
      contact: '',
      occupantsQty: '',
      apartmentUnit: '',
    },
    onSubmit: (value) => {
      console.log(value);
    }
  })

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Tenant</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-body d-flex flex-column">
              <div className='my-2'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text"
                  className='form-control'
                  id='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  aria-label="Fullname"
                />
              </div>
              <div className='my-2'>
                <label htmlFor="tenantEmail" className='form-label'>Email</label>
                <input type="email"
                  className='form-control'
                  id='tenantEmail'
                  value={formik.values.tenantEmail}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='my-2'>
                <label htmlFor="contact" className='form-label'>Contact</label>
                <input type="number"
                  className='form-control'
                  id='contact'
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='my-2'>
                <label htmlFor="occupantsQty" className='form-label'>Occupants Qty.</label>
                <input type="number"
                  className='form-control'
                  id='occupantsQty'
                  value={formik.values.occupantsQty}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='my-2'>
                <label htmlFor="title" className='form-label'>Apartment Unit</label>
                <input type="number"
                  className='form-control'
                  id='apartmentUnit'
                  value={formik.values.apartmentUnit}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="closeBtn btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default TenantModal