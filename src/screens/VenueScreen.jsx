import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {faker} from "@faker-js/faker";
import {NewPoster} from "../components/eventsSection";

const VenueScreen = () => {
    let {id} = useParams();
    console.log(id);
    let venue = {
        id: 0,
        name: faker.company.name(),
        description: faker.lorem.lines(3),
        cover: faker.image.business(500, 500, true),
        address: {
            line1: faker.address.street(),
            line2: faker.address.secondaryAddress(),
            district: faker.address.zipCode(),
            City: faker.address.cityName(),
            Country: 'Cyprus',
        },
        mobile: '99799123'
    }
    let mainEvent = {
        id: 0,
        name: faker.company.name(),
        poster: faker.image.nightlife(500, 500, true),
        venue: {
            id: 0,
            name: faker.company.name(),
            address: {
                line1: '1 Address Line',
                line2: '2 Address Line',
                district: 'District',
                City: 'City',
                Country: 'Cyprus',
            },
            mobile: '99799123'
        },
        description: faker.lorem.lines(3),
        time: faker.date.soon(5),
        date: faker.date.soon(5),
        contact: '99799123',
        options: [
            {
                id: 0,
                name: '',
                price: parseInt(faker.commerce.price(0,20)),
            }
        ]
    }
  return (

        <Container fluid className={'px-0'}>
                <div className={''} style={{
                    backgroundImage: `url("/assets/cover3.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    aspectRatio: '3.5',
                    objectFit: 'contain',
                }}>
                    <div className={'fillSpace text-center verticalCenter'} style={{
                        backdropFilter: 'blur(2px)',
                        WebkitBackdropFilter: 'blur(2px)'
                    }}>
                       <h1 className={'text-white'}>{venue.name}</h1>
                    </div>
                </div>
           <Container className={'py-3'}>
               <Row>
                   <Col>
                       <h3 className={'text-secondary'}>Description</h3>
                       <p>{mainEvent.description}</p>
                   </Col>
                   <Col md={'4'}>
                       <h4 className={'text-white'}>Featured Event</h4>
                       <NewPoster event={mainEvent}/>
                   </Col>
               </Row>
           </Container>
        </Container>

  )
}

export default VenueScreen