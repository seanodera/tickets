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
    let address = faker.address;
    return (<LinkContainer to={`/event/${eventDetails.id}`}>
        <div className={'glassEffect rounded-top px-0 h-100'}>
            <div className={'rounded-top'} style={{
                backgroundImage: `url("${eventDetails.image}")`,
                backgroundSize: 'cover',
                width: '100%',
                aspectRatio: '1',
                objectFit: 'contain',
            }}>
                <div className={'d-flex flex-row flex-fill justify-content-start ps-2 pt-2'}>
                    <div className={'rounded-2 p-1 bg-secondary'}>
                        {(eventDetails.options[0].price === 0) ? 'FREE' : ` $${eventDetails.options[0].price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                    </div>
                </div>
            </div>
            <div className={'px-2 pt-2 d-flex flex-row'}>
                <div className={'text-center'}>
                    <span className={'text-secondary h5'}>{monthStringShort(date.getMonth())}</span>
                    <h4 className={'text-white'}>{date.getDate()}</h4>
                    <h5 className={'text-white'}>{date.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2})}:{date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})}</h5>
                </div>
                <div className={'ps-2'}>
                    <span className={'h5 text-white  limitLines-2'}>{eventDetails.name}</span>
                    <LinkContainer to={'/venue/' + eventDetails.id}>
                        <p className={'text-secondary'}>{'Venue Name'}</p>
                    </LinkContainer>
                    <p>{address.street()}, {address.secondaryAddress()}, {address.zipCode()}, {address.cityName()}</p>
                </div>
            </div>
        </div>
    </LinkContainer>)
}


const OldPoster = ({eventDetails}) => {
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