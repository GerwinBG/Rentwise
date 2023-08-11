import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/Apartment.css';

function Apartments() {
  const [toggle, setToggle] = useState(false);
  function Toggle() {
    setToggle(!toggle);
  }
  return (
    <div className='d-flex apartment'>
      <div className={toggle ? 'd-none' : 'w-auto h-100 position-fixed'}>
        <Sidebar />
      </div>
      <div className={toggle ? 'd-none' : 'invisible'}>
        <Sidebar />
      </div>
      <div className='col'>
        <Navbar Toggle={Toggle} />
        <div className='apartmentPageContainer'>
          <div>

          </div>
          <div className='apartmentNav'>

          </div>
          {/* <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>

  )
}

export default Apartments