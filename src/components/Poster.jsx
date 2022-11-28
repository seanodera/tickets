import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {LinkContainer} from 'react-router-bootstrap';
import {faker} from "@faker-js/faker";
import {IoLocationOutline} from "react-icons/io5";
import {BsCurrencyEuro} from "react-icons/bs";
import {BiTime} from "react-icons/bi";
import {monthStringShort} from "../podo/utils";

const Poster = ({eventDetails}) => {
    let date = new Date(0);
    date.setUTCSeconds(eventDetails.Date.seconds, eventDetails.Date.nanoseconds);
    return (<LinkContainer to={`/event/${eventDetails.id}`}>
        <Card className={'glassEffect'}>
            <CardHeader className='py-0 px-0' style={{
                backgroundImage: `url("${eventDetails.image}")`,
                backgroundSize: 'cover',
                width: '100%',
                aspectRatio: '1',
                objectFit: 'contain',
            }}>
                <div className={'d-flex flex-row flex-fill justify-content-end'}>
                    <div className={'text-white text-center bg-secondary px-1 pt-1 mx-1 my-1  rounded-1'}
                         style={{}}>
                        <p>{date.getDate()} <br/> {monthStringShort(date.getMonth())} <br/> {date.getFullYear()}</p>
                    </div>
                </div>
            </CardHeader>
            <Card.Body className={'px-1 pb-1'} style={{
                height: '180px',
            }}>
                <Card.Title>{eventDetails.name}</Card.Title>
                <div className={'fillSpace'}>
                    <Card.Text style={{
                        height: '100px', overflow: 'hidden', textOverflow: 'ellipsis'
                    }}>{faker.lorem.paragraph(6)}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer className={'px-0 mx-0'}>
                <Row className={'text-center'}>
                    <Col md={'4'}>
                            <span>
                                <Card.Text><IoLocationOutline/><br/>Nicosia</Card.Text> </span>
                    </Col>
                    <Col md={'4'}>
                        <span>
                            <Card.Text><BiTime/><br/>{date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2})}:{date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})}</Card.Text>
                        </span>
                    </Col>
                    <Col md={'4'} className={'verticalCenter'}>
                            <span>
                                <Card.Text>{(eventDetails.options[0].price === 0) ? 'Free' : (<span>
                                    <BsCurrencyEuro/> {eventDetails.options[0].price.toLocaleString(undefined, {minimumFractionDigits: 2})}
                                </span>)}
                                    </Card.Text>
                            </span>
                    </Col>
                </Row>

            </Card.Footer>
        </Card>
    </LinkContainer>)
}

export default Poster