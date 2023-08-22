import React, { useEffect } from 'react'
import '../styles/Tenants.css'
import TenantModal from '../components/TenantModal'
import { useDispatch, useSelector } from 'react-redux'
import { setDataTabs } from '../store/dataTabReducer';
import axios from 'axios';
import TenantData from '../components/TenantData';


function Tenants() {
  const dispatch = useDispatch();
  const dataTabs = useSelector(state => state.dataTabs)

  const fetchDatas = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/apartments?userId=1&tenants');
      dispatch(setDataTabs(res.data.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDatas()
  }, []);

  const dataTabsArray = Array.isArray(dataTabs) ? dataTabs : [];

  return (

    <div className='apartmentContent overflow-auto'>
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='tenantHeader d-flex justify-content-between'>
          <h3>Tenant List</h3>
          <button className='tenantBtn btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="bi bi-plus-lg"></i>New Tenant</button>
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
                  <th scope="col" colSpan={3}>Occupants Qty.</th>
                  <th scope="col" colSpan={3}>Apartment Unit</th>
                  <th scope="col">Start date</th>
                  <th scope='col' colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  dataTabsArray.map(dataTab => (
                    // Check if dataTab.tenant exists before accessing its properties
                    dataTab.tenant && (
                      <TenantData
                        key={dataTab.tenant.id}
                        id={dataTab.tenant.id}
                        name={dataTab.tenant.name}
                        email={dataTab.tenant.email}
                        contact={dataTab.tenant.contact}
                        occupantQty={dataTab.tenant.occupantsQty}
                        apartmentUnit={dataTab.unit}
                        startDate={dataTab.tenant.startDate}
                      />
                    )
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tenants