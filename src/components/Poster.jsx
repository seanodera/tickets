import React, {useRef, useEffect, useState} from 'react'
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
    const ref = useRef(null);
   
    //this is to get the width
    var [width, setWidth] =useState(ref.current ? ref.current.offsetWidth : 0);
    useEffect(() => {
       
        width = ref.current ? ref.current.offsetWidth : 0;
        setWidth(ref.current ? ref.current.offsetWidth : 0);
        console.log('width', width);
      }, [ref.current]);
    
  return (
    <LinkContainer to={`/event/${eventDetails.id}`}>
    <Card >
        <CardHeader ref={ref} style={{backgroundImage: `url("${eventDetails.image}")`,
        backgroundSize: 'cover',
        height: `${width}px`,
         objectFit: 'contain' }}> 
            <Container>
                <Container style={{backgroundColor : "#FF1744", display: 'flex',
            width: `${0.2 * width}px`}} >
                    <h4>28 <br/> FEB 22</h4>
                     </Container>
            </Container>
        </CardHeader>
        <Card.Body>
            <Card.Title>{eventDetails.name}</Card.Title>
            <Card.Text>{eventDetails.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Text>From 20.00 eur </Card.Text>
        </Card.Footer>
    </Card>
    </LinkContainer>
  )
}

export default Poster