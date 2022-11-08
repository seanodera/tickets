import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const VenueScreen = () => {
    let {id} = useParams();
    console.log(id);
  return (
    <Container>
        <Container fluid style={{backgroundColor: '#262626'}}>

        </Container>
    </Container>
  )
}

export default VenueScreen