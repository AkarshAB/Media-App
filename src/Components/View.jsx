import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
getAllVideo
function View({ uploadVideoServerResponse }) {

  const [allVideo, setAllVideo] = useState()
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)


  const getVideo = async () => {
    //make api call
    const { data } = await getAllVideo()
    console.log(data);
    setAllVideo(data)
  }
  console.log(allVideo);


  useEffect(() => {
    getVideo()
  }, [uploadVideoServerResponse, deleteVideoStatus])

  return (
    <>
      <Row>
        {
          allVideo?.length > 0 ? allVideo?.map((item) => (
            <Col>
              <VideoCard displayData={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          )) : 'Nothing to display'
        }
      </Row>

    </>
  )
}

export default View