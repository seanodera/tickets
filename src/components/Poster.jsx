import React from 'react'
import { Card, CardImg, Container } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { LinkContainer } from 'react-router-bootstrap';

const Poster = ({ eventDetails }) => {
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
    <LinkContainer to={`/event/${eventDetails.id}`}>
    <Card style={{width : "16vw"}}>
        <CardHeader style={{backgroundImage: 'url("/assets/image1.jpg")', height: "16vw"}}> 
            <Container fluid>
                <Container style={{backgroundColor : "#FF1744"}}>
                    <h4>28 <br/> FEB 22</h4>
                     </Container>
            </Container>
        </CardHeader>
        <Card.Body>
            <Card.Title>{eventDetails.name}</Card.Title>
            <Card.Text>{eventDetails.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Text>From 20.00 eur</Card.Text>
        </Card.Footer>
    </Card>
    </LinkContainer>
  )
}

export default Poster