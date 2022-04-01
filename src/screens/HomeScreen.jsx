import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {AiTwotoneCalendar} from 'react-icons/ai'
import Poster from '../components/Poster';
import { getEvents } from '../podo/firebaseFunctions';


const HomeScreen = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getEvents().then((list) => {
      setPopular(list);
    })
  }, [])
 
  
  return (
    <>
    
      <Container fluid style={{ width : "100%",height : "30vw", backgroundColor: 'hsla(0,0%,100%,0.2)',}} className='px-0' >
      <img src="/assets/cover2.webp" alt='cover incase' height="100%" width="100%" style={{objectFit : "cover"}}/>
      </Container>
      <Container fluid className="py-2" style={{
        backgroundColor: 'hsla(0,0%,100%,0.2)',
        width: '100%'
      }}>
        <Row>
        <Col>
        <h5 style={{color : "#FF1744"}} className="m-0">MassHouse Presents :</h5>
        <h4> Heavy K and DrumBoss</h4>
        </Col>
        <Col style={{textAlign: "end"}}>
    
         <h4 style={{color : "#FF1744"}} className="m-0"> <AiTwotoneCalendar/> &nbsp;
           <h5 style={{color : "#FF1744", display : "inline-block"}} className="m-0">28th February 2022</h5></h4>

        <h5> from 50.00 eur</h5>
        </Col>
        </Row>
      </Container>

   
      <Container fluid className="my-3">
      <Row>
        <h3>Popular Events</h3>
      </Row>
      <Row className='gx-3 gy-3' md='1'>
    
        {popular.map((details) => (<Col md='3' > <Poster eventDetails={details} key={details.id}/> </Col>))}
      </Row>
      </Container>
      <Container fluid className='my-3'>
        <Row >
      <Col>
      <h3>Upcoming Events </h3>
      </Col>
         <Col  style={{display: 'contents',alignContent: 'end'}}>
         <Button className='px-2 mx-3 my-3' variant='outline-primary' size='sm' style={{
            borderRadius: '25',
          }}> View All Upcoming</Button>
         </Col>     
        </Row>
        <Row className='gx-3 gy-3'>
        {popular.map((details) => (<Col md='3' > <Poster eventDetails={details} key={details.id}/> </Col>))}
      </Row>
      </Container>
    </>
  )
}

export default HomeScreen