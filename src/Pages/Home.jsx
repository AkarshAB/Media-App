import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import Add from '../Components/Add'
import { Link } from 'react-router-dom';
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
//create a state for state lifting(in parent component)
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({}) 
  return (
    <div>
      <Row className='container'>
        <Col>
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </Col>
        <Col className='text-center' xl={4}>
          <Link to={'/watchhistory'}>
            <h4>Watch History</h4>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className='m-3'>
        <h3 className='text-center'>View All Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </Col>
        <Col className='m-3'>
        <h3 className='text-center'>Category</h3>
        <Category />
        </Col>
      </Row>
    </div>
  )
}

export default Home