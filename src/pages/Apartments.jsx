import React, { useState } from 'react'
import '../styles/Apartment.css';
import ApartmentModal from '../components/ApartmentModal';

function Apartments() {
  return (

    <div className='apartmentContent overflow-auto'>
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='apartmentHeader d-flex justify-content-between'>
          <h3>Apartment List</h3>
          <button className='apartmentBtn btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-plus-lg"></i>New Apartment</button>
          <ApartmentModal />
        </div>
        <div className="apartmentList d-flex flex-column">
          <div className='table-responsive-lg overflow-scroll'>
            <table className="table  border-dark px-2 ">
              <thead className='text-center'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Unit</th>
                  <th scope="col" colSpan={5}>Description</th>
                  <th scope="col">Price</th>
                  <th scope="col" colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <th scope="row" ></th>
                  <td></td>
                  <td colSpan={5}></td>
                  <td></td>
                  <td colSpan={2}>
                    <div className='d-flex justify-content-center'>
                      <button type="button" class="btn btn-outline-primary mx-2">Edit</button>
                      <button type="button" class="btn btn-outline-danger mx-2">Delete</button>
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

export default Apartments