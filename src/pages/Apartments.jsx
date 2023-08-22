import React, { useEffect } from 'react'
import '../styles/Apartment.css';
import ApartmentModal from '../components/ApartmentModal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDataTabs } from '../store/dataTabReducer';
import ApartmentData from '../components/ApartmentData';

function Apartments() {
  const dispatch = useDispatch();
  const dataTabs = useSelector(state => state.dataTabs);


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

    <div className='apartmentContent overflow-auto' >
      <div className='apartmentPageContainer d-flex flex-column p-3'>
        <div className='apartmentHeader d-flex justify-content-between'>
          <h3>Apartment List</h3>
          <button className='apartmentBtn btn text-white btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="bi bi-plus-lg"></i>New Apartment</button>
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
                {
                  dataTabsArray.map(dataTab => (
                    <ApartmentData
                      key={dataTab.id}
                      id={dataTab.id}
                      unit={dataTab.unit}
                      description={dataTab.description}
                      price={dataTab.price}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >


  )
}

export default Apartments