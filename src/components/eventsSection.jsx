import React from "react";
import {Col, Row} from "react-bootstrap";
import {faker} from "@faker-js/faker";
import {LinkContainer} from "react-router-bootstrap";
import {monthStringShort,  dayStringShort} from "../podo/utils";
import {IoLocation, IoLocationOutline, IoPersonOutline} from "react-icons/io5";

const NewPoster = ({event}) => {
    let date = event.date;
    return (<div className={'glassEffect rounded-top px-0 h-100 mb-2'}>

        <div className={'rounded-top'} style={{
            backgroundImage: `url("${event.poster}")`,
            backgroundSize: 'cover',
            width: '100%',
            aspectRatio: '1',
            objectFit: 'contain',
        }}>
            <div className={'d-flex flex-row flex-fill justify-content-start ps-2 pt-2'}>
                <div className={'rounded-2 p-1 bg-secondary'}>
                    {(event.options[0].price === 0)? 'FREE' : ` $${event.options[0].price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                </div>
            </div>
        </div>
        <div className={'px-2 pt-2 '}>
            <h4 className={'text-secondary'}>{dayStringShort(date.getDay())}, {date.getDate()} {monthStringShort(date.getMonth())}</h4>
            <span className={'h4 text-white  limitLines-2'}>{event.name}</span>
            <LinkContainer to={'/venue/' + event.id}>
                <p className={'text-secondary'}><IoLocationOutline size={20}/> {event.venue.name}</p>
            </LinkContainer>
            <p className={'text-secondary'}><IoPersonOutline size={20}/> {event.id} </p>
        </div>

    </div>)
}
const EventsSection = () => {
    let list = [
        {
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
        },
        {
            id: 1,
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
        },
        {
            id: 2,
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
        },
        {
            id: 3,
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
        },
        {
            id: 4,
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
        },
    ]

    return (<Row className={'gx-5 gy-3'} style={{
        flexWrap: 'nowrap',
        overflow:  'hidden'
    }}>
        {
            list.map((_event, index) => (
                <Col key={index} md={'4'} className={''}><NewPoster event={_event}/></Col>))
        }
    </Row>)
}

export default EventsSection;
export {NewPoster}