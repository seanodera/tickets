import React, {useEffect, useState} from 'react'
import {Carousel, CarouselItem, Col, Container, Row} from 'react-bootstrap'
import Poster from '../components/Poster';
import {getAdverts, getEvents} from '../podo/firebaseFunctions';
import HomeAd from "../components/HomeAd";
import WeeklySection from "../components/WeeklySection";


const HomeScreen = () => {
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [ads, setADS] = useState([]);
    useEffect(() => {
        getEvents().then((list) => {

            let index = Math.random() * (list.length + 1)
            let fullList = list;
            let tempList1 = list.sort((a, b) => {
                let date1 = new Date(0);
                date1.setUTCSeconds(a.Date.seconds,a.Date.nanoseconds);

                let date2 = new Date(0);
                date2.setUTCSeconds(b.Date.seconds,b.Date.nanoseconds);
                return  (date1.getUTCDate() - date2.getUTCDate());
            });
            let tempList2 = tempList1.sort((a,b) => {
                let date1 = new Date(0);
                date1.setUTCSeconds(a.Date.seconds,a.Date.nanoseconds);

                let date2 = new Date(0);
                date2.setUTCSeconds(b.Date.seconds,b.Date.nanoseconds);
                return  (date1.getUTCMonth() - date2.getUTCMonth());
            }).slice(0,4)
            setUpcoming(tempList2);
            setPopular(fullList.splice(index, 4));
        });
        setADS(getAdverts);
    }, [])


    return (<>

        <Carousel>
            {ads.map((_advert, index) => (
                <CarouselItem key={index}>
                    <HomeAd advert={_advert}/>
                </CarouselItem>))}
        </Carousel>
        <Container fluid>
            <Row className={'bg-dark py-2'}>
                <Col>
                    <div className='py-3 customCenter colorThemeTrans' style={{
                        height: '100%',
                    }}>
                        <h5>Email Delivery</h5>
                        <p className={'text-black'}>immediate online delivery</p>
                    </div>
                </Col>
                <Col>
                    <div className='py-3 customCenter' style={{
                        height: '100%',
                        backgroundColor: 'rgba(38, 38, 38, 0.6)'
                    }}>
                        <h5 className={'text-white'}>Refundable </h5>

                        <p className={'text-white'}>Purchases made here are refundable</p>
                    </div>
                </Col>
                <Col>
                    <div className='py-3 customCenter' style={{
                        height: '100%',
                        WebkitBackdropFilter: 'contrast(20%)',
                        backdropFilter: 'contrast(20%)',
                    }}>
                        <h5 className={'text-white'}>Simple</h5>
                        <p className={'text-white'}>Qr code for entry</p>
                    </div>
                </Col>
            </Row>
        </Container>
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

                {popular.map((details) => (<Col key={details.id} md='3'> <Poster eventDetails={details} /> </Col>))}
            </Row>
        </Container>

        <Container className='mt-3 pb-3'>
            <Row className={'mt-3 mb-2 py-1 pe-0 ps-0'}>
                <Col md={'auto'}>
                    <h3 className={'text-white text-start'}>Upcoming Events</h3>
                </Col>
                <Col>
                    <hr/>
                </Col>

            </Row>

            <Row className='gx-3 gy-3'>
                {upcoming.map((details) => (
                    <Col key={details.id} md='3'> <Poster className={'fillSpace'} eventDetails={details} />
                    </Col>))}
            </Row>
        </Container>
       <Container className={'mt-3'} >
           <WeeklySection/>
       </Container>
    </>)
}

export default HomeScreen