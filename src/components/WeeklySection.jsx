import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {faker} from "@faker-js/faker";
import {LinkContainer} from "react-router-bootstrap";

const EventWidget = ({event}) => {

    return (<LinkContainer to={'/'}>
        <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
            <Card.Img variant={'top'} className={'rounded-top'}
                      src={event.cover}/>
            <Card.Title className={'text-white px-1 pt-2'}>{event.venue}</Card.Title>
            <Card.Text className={'text-white px-1'}>{event.eventName}</Card.Text>

        </Card>
    </LinkContainer>);
}

const WeeklyWidget = ({weekEvents}) => {

    return (<div className={`${(weekEvents.events.length > 1) ? 'glassEffect rounded-4 px-2' : ''} py-2`}>
            <h5 className={'text-white'}>{weekEvents.day}</h5>
            {(weekEvents.events.length > 1) ? (<Row>
                {weekEvents.events.map((_event, index) => (<Col key={index}>
                    <EventWidget event={_event}/>
                </Col>))}
            </Row>) : <EventWidget event={weekEvents.events[0]}/>}

        </div>)
}

const WeeklySection = () => {

    let list = [{
        day: 'Monday', events: [{
            venue: 'Club Teez',
            eventName: 'RnB Night',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Tuesday', events: [{
            venue: 'Ginery',
            eventName: 'Coming Soon',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Wednesday', events: [{
            venue: 'Ithaki venue',
            eventName: 'Erasmus',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }, {
            venue: 'Central Club',
            eventName: 'Erasmus',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Thursday', events: [{
            venue: 'Ginery Thursday',
            eventName: 'Premium bottles',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Friday', events: [{
            venue: 'Club Teez',
            eventName: 'Popping Bottles',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Saturday', events: [{

            venue: 'Club Teez',
            eventName: 'RnB Night',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    }, {
        day: 'Sunday', events: [{
            venue: 'Club Teez',
            eventName: 'RnB Night',
            cover: faker.image.abstract(500, 500, true),
            id: faker.random.numeric(),
        }]
    },]

    return (<div>
        <div className={'bg-secondary rounded-3'}>
            <div className={'glassEffect rounded-3 py-3 px-2'}>

                <Row className={'mt-3 mb-2 py-1 pe-0 ps-0'}>
                    <Col md={'auto'}>
                        <h3 className={'text-white text-start'}>Weekly Vibe</h3>
                    </Col>
                    <Col className={'text-end'}>
                        <p>View our regular Partying and clubbing spots through out the week</p>
                    </Col>

                </Row>
                <Row className={'gx-3 gy-2 px-2 mt-2 d-flex flex-row justify-content-center'}>

                    {list.map((weekEvents, index) => (
                        <Col key={index} md={(weekEvents.events.length > 1) ? 6 : 3}><WeeklyWidget
                            weekEvents={weekEvents} key={index}/></Col>))}

                </Row>
            </div>
        </div>

    </div>)
}

export default WeeklySection;