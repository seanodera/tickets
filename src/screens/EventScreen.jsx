import React from 'react'
import { Row, Col, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { AiOutlineArrowDown, AiTwotoneCalendar } from 'react-icons/ai';
const EventScreen = () => {
    var details = {
        "image" : "/assets/image1.jpg",
        "name" : "Event Name",
        "price" : 500,
        "location" : "Hom Club Cy",
        "Date" : "20220228",
        "Time" : 2300,
        "id" : 1,
        "description" : "short description",
    };
  return (
    <>
    <Row>
        <Col>
        <img src={details.image} alt='poster' style={{width : "60vw", height: "60vw"}}/>
        </Col>
        <Col>
        <ListGroup>
            <ListGroupItem>
                <Container fluid>
                    <h4><AiTwotoneCalendar/> Schedule</h4>
                  <div style={{textAlign: 'center'}}> 
                      <h5 className="my-0">28th February 2022 at 11.30 PM</h5>
                    <h3 style={{color:"#FF1744"}} className="my-0"><AiOutlineArrowDown/></h3>
                    <h5 className="my-0">1st March 2022 at 3.00 AM</h5></div>
                </Container>
            </ListGroupItem>
            <ListGroupItem>
                <Container fluid>
                    <h4> Location details </h4>
                </Container>
            </ListGroupItem>
        </ListGroup>
        </Col>
    </Row>
    </>
  )
}

export default EventScreen