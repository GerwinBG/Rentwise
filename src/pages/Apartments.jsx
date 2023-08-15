import React, { useState } from 'react'
import '../styles/Apartment.css';
import ApartmentModal from '../components/ApartmentModal';

function Apartments() {
  return (

    <div className='apartmentContent overflow-auto'>
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='apartmentHeader d-flex justify-content-between'>
          <h3>Apartment List</h3>
          <button className='btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">New Apartment</button>
          <ApartmentModal />
        </div>
        <div className="apartmentList d-flex flex-column">
          <div className='table-responsive-lg overflow-scroll'>
            <table className="table  border-dark px-2 ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
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

export default Apartments