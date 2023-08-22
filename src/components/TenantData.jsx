import React from 'react'

function TenantData(props) {
  const { id, name, email, contact, occupantQty, apartmentUnit, startDate } = props;
  return (
    <>
      <tr >
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{contact}</td>
        <td colSpan={3}>{occupantQty}</td>
        <td colSpan={3}>{apartmentUnit}</td>
        <td>{startDate}</td>
        <td colSpan={2}>
          <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-primary mx-2">Edit</button>
            <button className="btn btn-outline-danger mx-2">Delete</button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TenantData 