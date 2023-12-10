import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getVideoHistory } from '../services/allAPI';

function Watchhistory() {
  const [history,setHistory] = useState([])

const handleHistory = async() => {
  //make an api call to get the watch video history
  const {data} = await getVideoHistory()
  setHistory(data)
  console.log(data);
}
console.log(history);

useEffect (() => {
  handleHistory()
},[])

  return (
    <div>
      <div className='text-end me-5 '>
        <button className='btn btn-info'>Back To Home</button>
      </div>
      <MDBTable className='text-center'>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Caption</th>
          <th scope='col'>URL</th>
          <th scope='col'>Timestamp</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          history.map((item) => (
            <tr>
          <th scope='row'>{item.id}</th>
          <td>{item.caption}</td>
          <td><a href={item.embedLink}>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>
        </tr>
          ))
        }
        
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Watchhistory