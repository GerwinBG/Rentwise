import React from 'react'
import '../styles/Tenants.css'
import TenantModal from '../components/TenantModal'


function Tenants() {

  return (

    <div className='apartmentContent overflow-auto'>
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='tenantHeader d-flex justify-content-between'>
          <h3>Tenant List</h3>
          <button className='btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">New Tenant</button>
          <TenantModal />
        </div>
        <div className="apartmentList d-flex flex-column">
          <div className='table-responsive-lg overflow-scroll'>
            <table className="table  border-dark px-2 ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Apartment Unit</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th>Occupants Qty.</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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