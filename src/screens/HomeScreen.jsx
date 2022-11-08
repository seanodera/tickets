import React, {useEffect, useState} from 'react'
import {Carousel, CarouselItem, Col, Container, Row} from 'react-bootstrap'
import Poster from '../components/Poster';
import {getAdverts, getEvents} from '../podo/firebaseFunctions';
import HomeAd from "../components/HomeAd";


const HomeScreen = () => {
    const [popular, setPopular] = useState([]);
    const [ads, setADS] = useState([]);
    useEffect(() => {
        getEvents().then((list) => {
            setPopular(list);
        });
        setADS(getAdverts);
    }, [])


    return (<>
        <Carousel>
            {ads.map((_advert, index) => (
                <CarouselItem key={index}>
                    <HomeAd advert={_advert} />
                </CarouselItem>))}
        </Carousel>
        <Container>
            <Row className={'mt-3 mb-2 py-1 pe-2 ps-0'}>
                <Col md={'3'}>
                    <h3 className={'text-white text-start'}>Popular Events</h3>
                </Col>
                <Col md={'9'}>
                    <hr/>
                </Col>
            </Row>
            <Row className='gx-3 gy-3'>

                {popular.map((details) => (<Col md='3'> <Poster eventDetails={details} key={details.id}/> </Col>))}
            </Row>
        </Container>

        <Container className='my-3'>
            <Row className={'mt-3 mb-2 py-1 pe-0 ps-0'}>
                <Col md={'auto'}>
                    <h3 className={'text-white text-start'}>Upcoming Events</h3>
                </Col>
                <Col>
                    <hr/>
                </Col>

            </Row>

            <Row className='gx-3 gy-3'>
                {popular.map((details) => (<Col md='3'> <Poster eventDetails={details} key={details.id}/>
                </Col>))}
            </Row>
        </Container>
    </>)
}

export default HomeScreen