import React, {useRef, useEffect, useState} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {LinkContainer} from 'react-router-bootstrap';
import {faker} from "@faker-js/faker";
import {IoLocationOutline} from "react-icons/io5";
import {BsCurrencyEuro} from "react-icons/bs";
import {BiTime} from "react-icons/bi";

const Poster = ({eventDetails}) => {

    const ref = useRef(null);

    //this is to get the width
    var [width, setWidth] = useState(0);
    useEffect(() => {
        // eslint-disable-next-line
        width = ref.current ? ref.current.offsetWidth : 0;
        setWidth(ref.current ? ref.current.offsetWidth : 0);
        console.log('width', width);
    }, [ref.current]);

    return (<LinkContainer to={`/event/${eventDetails.id}`}>
        <Card className={'glassEffect'}>
            <CardHeader ref={ref} className='py-0 px-0' style={{
                backgroundImage: `url("${eventDetails.image}")`,
                backgroundSize: 'cover',
                width: '100%',
                aspectRatio: '1',
                objectFit: 'contain',
            }}>
                <div className={'d-flex flex-row flex-fill justify-content-end'}>
                    <div className={'text-white text-center bg-secondary px-1 pt-1 mx-1 my-1  rounded-1'}
                         style={{}}>
                        <p>28 <br/> FEB <br/> 22</p>
                    </div>
                </div>
            </CardHeader>
            <Card.Body className={'px-1'}>
                <Card.Title>{eventDetails.name}</Card.Title>
                <Card.Text style={{
                    height: '100px', overflow: 'hidden', textOverflow: 'ellipsis'
                }}>{faker.lorem.paragraph(6)}</Card.Text>
            </Card.Body>
            <Card.Footer className={'px-0 mx-0'}>
                <Row className={'text-center'}>
                    <Col md={'4'}>
                            <span>
                                <Card.Text><IoLocationOutline/><br/>Nicosia</Card.Text> </span>
                    </Col>
                    <Col md={'4'}>
                        <span>
                            <Card.Text><BiTime/><br/>23:00</Card.Text>
                        </span>
                    </Col>
                    <Col md={'4'} className={'verticalCenter'}>
                            <span>
                                <Card.Text><BsCurrencyEuro/>{faker.commerce.price(0, 99)}</Card.Text>
                            </span>
                    </Col>
                </Row>

            </Card.Footer>
        </Card>
    </LinkContainer>)
}

export default Poster