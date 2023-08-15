import React from 'react'

function TenantModal() {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Tenant</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form>
            <div className="modal-body d-flex flex-column">
              <div className='my-2'>
                <label htmlFor="title" className='form-label'>Name</label>
                <input type="text" className='form-control' id='title' aria-label="Full name" />
              </div>
              <div className='my-2'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text" className='form-control' id='email' />
              </div>
              <div className='my-2'>
                <label htmlFor="title" className='form-label'>Contact</label>
                <input type="number" className='form-control' />
              </div>
              <div className='my-2'>
                <label htmlFor="title" className='form-label'>Occupants Qty.</label>
                <input type="number" className='form-control' />
              </div>
              <div className='my-2'>
                <label htmlFor="title" className='form-label'>Apartment Unit</label>
                <input type="number" className='form-control' />
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