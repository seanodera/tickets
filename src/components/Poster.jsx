import React, {useRef, useEffect, useState} from 'react'
import { Card,  Container } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { LinkContainer } from 'react-router-bootstrap';

const Poster = ({ eventDetails }) => {
    
    const ref = useRef(null);
   
    //this is to get the width
    var [width, setWidth] =useState(0);
    useEffect(() => {
        // eslint-disable-next-line
        width = ref.current ? ref.current.offsetWidth : 0;
        setWidth(ref.current ? ref.current.offsetWidth : 0);
        console.log('width', width);
      }, [ref.current]);
    
  return (
    <LinkContainer to={`/event/${eventDetails.id}`}>
    <Card >
        <CardHeader ref={ref} className='py-0 px-0' style={{backgroundImage: `url("${eventDetails.image}")`,
        backgroundSize: 'cover',
        height: `${width}px`,
         objectFit: 'contain',
         }}> 
            <Container className='py-0 px-0 my-0 mx-0' fluid style={{display: 'flex'}}>
                <Container fluid/>
                <Container className='py-0 px-0 my-0 mx-0' style={{backgroundColor : "#FF1744",
                textAlign: 'center',
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