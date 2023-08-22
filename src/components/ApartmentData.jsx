import React from 'react'

function apartmentData(props) {
  const { id, unit, description, price, } = props;
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{unit}</td>
        <td colSpan={5}>{description}</td>
        <td>{price}</td>
        <td colSpan={2}>
          <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-outline-primary mx-2">Edit</button>
            <button type="button" className="btn btn-outline-danger mx-2">Delete</button>
          </div>
        </td>
      </tr>

    </>
  )
}

export default apartmentData 