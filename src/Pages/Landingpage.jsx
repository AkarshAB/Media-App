import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigate=useNavigate()

  return (
    <div>
      {/* first row */}
      <Row className='m-5 p-3'>
        <Col>
              {/* content */}
              <h3>Welcome to <span className='text-primary'>Media Player</span> </h3>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis suscipit nam, aut dicta officia ad quasi repellendus doloremque impedit labore a maiores hic aliquam saepe odio quam veritatis vero?
              Minima nihil molestias modi reiciendis dicta, deleniti repudiandae iusto hic necessitatibus doloribus itaque labore temporibus quaerat, officiis corrupti qui culpa officia ex eum voluptatibus, voluptatem quam. Quasi repudiandae distinctio expedita!</p>
              <button onClick={()=>navigate('/home')} className='btn btn-primary my-4'>Get Started</button>
           
        </Col> 
         <Col style={{marginLeft:'50px'}}>
              {/* image */}
              <img style={{width:'600px'}} src="https://cutewallpaper.org/21/equalizer-gif/Programming-JavaScript-Equalizer-A-webdeasy.de.gif" alt="" />
         </Col>
      </Row>

      {/* 2nd row */}
      <Row className='m-5' >
        <h2 className='text-center text-primary my-5'>Features</h2>
        <Col style={{marginLeft:'80px'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif" />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://cdn.dribbble.com/users/154088/screenshots/770283/attachments/76374/music_player02.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
        </Col>
      </Row>

      {/* 3rd row */}
      <Row className='border border-1 border-primary p-5 m-5'>
       <Col>
            <h3 className='text-primary my-5'>Simple, Fast and Powerful</h3>
            <h5>Play Everything</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam libero unde sit cum voluptas accusamus sapiente minus itaque</p>
            <h5>Categorise Videos</h5>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque obcaecati distinctio temporibus quod recusa,
            </p>
            <h5>Managing History</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias quaerat quis accusamus molestiae error quasi hic</p>

       </Col> 
       <Col>
       <iframe width="560" height="500" src="https://www.youtube.com/embed/zuVV9Y55gvc?si=8R90rrQLG7ALiEO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </Col>
      </Row>
    </div>
  )
}

export default LandingPage