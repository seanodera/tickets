
import React from 'react'
import { Row, Col, ListGroup, ListGroupItem, Container, Button, Table } from 'react-bootstrap';
import { AiOutlineArrowDown, AiTwotoneCalendar } from 'react-icons/ai';
import {IoLocationOutline} from 'react-icons/io5'
const EventScreen = () => {
    var details = {
        "image" : "/assets/image2.jpg",
        "name" : "Event Name",
        "price" : 500,
        "location" : "Hom Club Cy",
        "Date" : "20220228",
        "Time" : 2300,
        "id" : 1,
        "description" : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat purus vitae purus fermentum dictum. Nunc bibendum finibus lorem, sed molestie sem cursus sed. Donec commodo sapien in velit condimentum, sit amet interdum ipsum varius. Quisque molestie ligula mi. Pellentesque a mi sed augue sodales aliquam. Suspendisse at urna ante.`,
    "tickets": [{
        "id" : 1,
        "name" : "Vip Table",
        "price": 50.00,
        "availability": true,
    }, {
        "id" : 2,
        "name" : "Normal table",
        "price": 25.00,
        "availability": false,
    }]};
    // const handleClick = () => {
    //     window.open("http://twitter.com/saigowthamr");
    //   };
  return (
    <Container fluid>

    <Row>
        <Col>
        <img src={details.image} alt='poster' style={{width : "60vw", height: "60vw"}}/>
        </Col>
        <Col style={{maxHeight: '60vw'}}>
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
                    <h4> <IoLocationOutline/> Location details </h4>
                    <div  style={{textAlign: 'center'}}>
                   <a href='https:www.google.com/maps' target="_blank" rel="noopener noreferrer" > <h5 style={{color:"#FF1744"}} > Markou Drakou 3, Engomi, Nicosia </h5></a> 
                    </div>
                </Container>
            </ListGroupItem>
            <ListGroupItem>
                <Container fluid>
                    <h4> Ticket Options</h4>
                    <Table>
                        <thead>
                            <tr>
                                <td> Type</td>
                                <td>Price</td>
                                <td>Buy</td>
                            </tr>
                        </thead>
                       <tbody>
                      
                           {
                               details.tickets.map((ticket) => (<tr> <td>{ticket.name}</td>
                               <td>{ticket.price}.00 EUR</td>
                               <td>
                               <Button variant={'primary'} style={{backgroundColor: '#FF1744'}} disabled={!ticket.availability}>
                                   Buy
                               </Button>
                                   </td></tr>))
                           }
                            
                       </tbody>
                    </Table>
                </Container>
            </ListGroupItem>
            <ListGroupItem>
                <Container fluid>
                    <h4>Description</h4>
                    <h5> {details.description}</h5>
                </Container>
            </ListGroupItem>
        </ListGroup>
        </Col>
    </Row>
    </Container>
  )
}

export default EventScreen