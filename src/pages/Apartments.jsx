import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Modal from '../components/Modal';
import '../styles/Apartment.css';

function Apartments() {
  return (
    <div>
      <Navbar />
      <div className='apartments d-flex'>
        <div className='d-none d-lg-block'>
          <Sidebar />
        </div>
        <div className='apartmentContent overflow-auto'>
          <div className='apartmentPageContainer d-flex flex-column p-3'>
            <div className='headerNav d-flex justify-content-between'>
              <h3>Apartmen List</h3>
              <button className='btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">New Apartment</button>
              <Modal />
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
                      <td>weqqqqqqqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwqqqqqqqeq</td>
                      <td>weqqqqeqweqwewqeqweqwewqe222222222222222222222222222</td>
                      <td>qweeeeeeeeeeeeeeeqwwwwwwwwwwwwwwwwwwwwwwwwwwww</td>
                      <td>1233333333333</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> </td>
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
      </div>


    </div>


  )
}

export default Apartments