import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDataTabs } from '../store/dataTabReducer';


function Dashboard() {
  const dispatch = useDispatch();
  const dataTabs = useSelector(state => state.dataTabs);
  const [TenantsCount, setTenantsCount] = useState(0);
  const loggedInUser = useSelector(state => state.loggedInUser);

  const fetchDatas = async () => {
    try {
      const userId = loggedInUser.id
      const res = await axios.get(`http://localhost:8000/api/v1/apartments?userId=${userId}&tenants`);
      const apartmentData = res.data.data;

      // Count apartments with tenants
      const count = apartmentData.reduce((count, apartment) => {
        if (apartment.tenant) {
          return count + 1;
        }
        return count;
      }, 0);

      setTenantsCount(count);
      dispatch(setDataTabs(apartmentData));

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDatas();
    localStorage.setItem
  }, [loggedInUser]);



  return (

    <div className='dashboard'>
      <div className='dashContent'>
        <h1 className='m-4'>Welcome Owner</h1>
        <hr />
        <div className='dashCards'>
          <div className='apartmentsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-house-door-fill"></i>
            <h4>Total Apartments: <b>{dataTabs.length}</b></h4>
            <div className='d-flex justify-content-end'>
              <NavLink to="/apartments" >
                <button className='btn btn-primary border shadow rounded'>Visit List</button>
              </NavLink>

            </div>
          </div>
          <div className='tenantsQty p-4 border shadow rounded d-flex flex-column justify-content-around'>
            <i className="bi bi-file-person-fill"></i>
            <h4>Total Tenants: <b>{TenantsCount}</b></h4>
            <div className='d-flex justify-content-end'>
              <NavLink to="/tenants" >
                <button className='btn btn-primary border shadow rounded'>Visit List</button>
              </NavLink>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard