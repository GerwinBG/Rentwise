import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';

function ApartmentModal() {
  const loggedInUser = useSelector(state => state.loggedInUser);

  const formik = useFormik({
    initialValues: {
      unit: '',
      description: '',
      price: '',
    },
    onSubmit: async (values) => {
      try {
        const token = loggedInUser.token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.post('http://localhost:8000/api/v1/apartments', values, config);
        console.log('Apartment created successfully', res.data);
      } catch (error) {
        if (error.response) {
          console.error('Apartment creation failed', error.response.data);
        } else {
          console.error('Apartment creation failed', error.message);
        }
      }
    }

  })

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Apartment</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className='my-3'>
                <label htmlFor="unit" className='form-label'>Apartment Unit Code</label>
                <input type="text"
                  className="form-control"
                  id='unit'
                  value={formik.values.unit}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control"
                  id="description"
                  rows="3"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <div className='my-3'>
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number"
                  className="form-control"
                  id='price'
                  value={formik.values.price}
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

export default ApartmentModal