import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {faker} from "@faker-js/faker";
import {LinkContainer} from "react-router-bootstrap";

const VenueWidget = ({venue}) => {


    return (<LinkContainer to={'/venue/' + venue.id}>
        <div className={'glassEffect rounded-top px-0 h-100'}>
            <div className={'rounded-top'} style={{
                backgroundImage: `url("${venue.cover}")`,
                backgroundSize: 'cover',
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'contain',
            }}></div>
            <div className={'px-1 mt-1 text-white'}>
                <h3 className={'text-white'}>{venue.name}</h3>
                <p>{venue.description}</p>
                <p className={'mb-0'}>{venue.address.line1}, {venue.address.line2}</p>
                <p>{venue.address.district}, {venue.address.City}, 2370</p>
            </div>
        </div>
    </LinkContainer>)
}

const Venues = () => {
    let venues = [
        {
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
        },  {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        },
    ]
    return (<Container className={'py-3'}>
        <div className={'d-flex flex-row justify-content-between mb-3'}>
            <div>
                <h2 className={'text-secondary text-start'}>
                    Venues
                </h2>
            </div>
            <div>
                Controls Area
            </div>
        </div>
        <Row className={'g-3'}>

            {venues.map((_venue, index) => <Col md={'4'}> <VenueWidget venue={_venue}/></Col>)}

        </Row>
    </Container>)
}

export default Venues;