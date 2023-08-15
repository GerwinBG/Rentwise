import React from 'react'
import '../styles/Tenants.css'
import TenantModal from '../components/TenantModal'


function Tenants() {

  return (

    <div className='apartmentContent overflow-auto'>
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='tenantHeader d-flex justify-content-between'>
          <h3>Tenant List</h3>
          <button className='tenantBtn btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-plus-lg"></i>New Tenant</button>
          <TenantModal />
        </div>
        <div className="apartmentList d-flex flex-column">
          <div className='table-responsive-lg overflow-scroll'>
            <table className="table  border-dark px-2 ">
              <thead className='text-center'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th>Occupants Qty.</th>
                  <th scope="col">Apartment Unit</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr >
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={2}>
                    <div className='d-flex justify-content-center'>
                      <button class="btn btn-outline-primary mx-2">Edit</button>
                      <button class="btn btn-outline-danger mx-2">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tenants