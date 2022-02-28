import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiTwotoneCalendar} from 'react-icons/ai'
import Poster from '../components/Poster';

const HomeScreen = () => {
  var popular = 
    [
      {
        "image" : "/assets/image1.jpg",
        "name" : "Event Name",
        "price" : 500,
        "location" : "Hom Club Cy",
        "Date" : "20220228",
        "Time" : 2300,
        "id" : 1,
        "description" : "short description",
    }, {
      "image" : "/assets/image1.jpg",
      "name" : "Event Name",
      "price" : 500,
      "location" : "Hom Club Cy",
      "Date" : "20220228",
      "Time" : 2300,
      "id" : 2,
      "description" : "short description",
  },
  {
    "image" : "/assets/image1.jpg",
    "name" : "Event Name",
    "price" : 500,
    "location" : "Hom Club Cy",
    "Date" : "20220228",
    "Time" : 2300,
    "id" : 3,
    "description" : "short description",
},{
  "image" : "/assets/image1.jpg",
  "name" : "Event Name",
  "price" : 500,
  "location" : "Hom Club Cy",
  "Date" : "20220228",
  "Time" : 2300,
  "id" : 4,
  "description" : "short description",
},{
  "image" : "/assets/image1.jpg",
  "name" : "Event Name",
  "price" : 500,
  "location" : "Hom Club Cy",
  "Date" : "20220228",
  "Time" : 2300,
  "id" : 5,
  "description" : "short description",
} , {
  "image" : "/assets/image1.jpg",
  "name" : "Event Name",
  "price" : 500,
  "location" : "Hom Club Cy",
  "Date" : "20220228",
  "Time" : 2300,
  "id" : 5,
  "description" : "short description",
}]
  ;
  var upcoming = {};
  return (
    <>
    
      <Container fluid style={{ width : "100%",height : "30vw"}} >
      <img src="/assets/image1.jpg" alt='cover incase' height="100%" width="100%" style={{objectFit : "cover"}}/>
      </Container>
      <Container fluid className="py-2">
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
      <Row>
        {popular.map((details) => (<Col > <Poster eventDetails={details}/> </Col>))}
      </Row>
      </Container>

    </>
  )
}

export default HomeScreen