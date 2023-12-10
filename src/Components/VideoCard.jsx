import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { deleteVideo, watchVideoHistory } from '../services/allAPI';





function VideoCard({displayData, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    //make an api call to get the video watch history
    const {caption, embedLink} = displayData
  //date and time
  let today = new Date()
  console.log(today);
  const timestamp = new Intl.DateTimeFormat('en-us', {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second: '2-digit'}).format(today)
  console.log(timestamp);

  let videoDetails = {
    caption,
    embedLink,
    timestamp
  }

  await watchVideoHistory(videoDetails)

  }
  


  //deleting a video
  const deleteAVideo = async (id) => {
    const response = await deleteVideo (id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStarted= (e, id) => {
    console.log('Drag started' + id, e);
    e.dataTransfer.setData('videoId',id) //data transfer
  }
  return (
    <div>
      <MDBCard draggable onDragStart= {(e) => dragStarted(e, displayData?.id)} style={{width: '250px', height:'300px'}}>
      <MDBCardImage onClick={handleShow} src={displayData.url} position='top' alt='...' style={{width:'100%', height:'200px'}}/>
      <MDBCardBody className='d-flex justify-content-around '>
        <MDBCardTitle>{displayData.caption}</MDBCardTitle>
        <button onClick={() => deleteAVideo(displayData?.id)}  className='btn ms-5'><i className='fa-solid fa-trash text-danger'></i></button>
        <MDBCardText>

        </MDBCardText>

      </MDBCardBody>
    </MDBCard>

{/* //Modal */}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard