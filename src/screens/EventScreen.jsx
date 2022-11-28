import React, {useEffect, useRef, useState} from 'react'
import {Row, Col, ListGroup, ListGroupItem, Container, Button, Table} from 'react-bootstrap';
import {IoLocationOutline} from 'react-icons/io5'
import {MdOutlineDescription} from 'react-icons/md'
import {useNavigate, useParams} from 'react-router-dom';
import {addEvent, getEventDetails, getUser, makeReservation, updateEvent} from '../podo/firebaseFunctions';
import {faker} from "@faker-js/faker";
import {BiBookBookmark, BiMoney, BiShare} from "react-icons/bi";
import LoadingScreen from "../components/LoadingScreen";

const EventScreen = () => {
    let {id} = useParams();

    const _ref = useRef(null);
    let history = useNavigate();
    const [details, setDetails] = useState({
        options: []
    });
    useEffect(() => {

        getEventDetails(id).then((dets) => {

            setDetails(dets);
            console.log('details are', dets);
        });

    }, [id])

    function handleReserve() {
        let user = getUser();
        if (user == null) {
            history('/login');
        } else {
            makeReservation(id, 0, 0);
        }
    }
    let address = faker.address;
    console.log(`https://maps.google.com/maps?q='${address.latitude(36,34)}','${address.longitude(34,32)}'&hl=es&z=14&amp;output=embed`)
    if (details.options.length === 0) {
        return (<LoadingScreen/>)
    } else return (<Container className={'py-3 '}>
        <Row>
            <Col md={'6'}>
                <h4 className={'text-white'}>{details.name}</h4>
                <img src={details.image} alt='poster' style={{
                    width: '100%', aspectRatio: '1',
                }}/>

            </Col>
            <Col>
                <ListGroup>
                    <ListGroupItem className={'pt-0'}>
                        <h4><MdOutlineDescription/> Description</h4>
                        <p>{details.description}</p>
                    </ListGroupItem>

                    <ListGroupItem className={'py-0'}>
                        <h4><IoLocationOutline size={28}/> Location</h4>
                        <Container fluid ref={_ref} className='py-0 px-0 my-0 mx-0'>
                            <iframe className={'fillSpace'}

                                    src={`https://maps.google.com/maps?q='${address.latitude(36,34)}','${address.longitude(34,32)}'&hl=es&z=14&amp;output=embed`}
                                    title='maps' allowFullScreen='' loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Container>
                    </ListGroupItem>
                    <ListGroupItem className={'pb-0'}>
                        <h4><BiMoney size={22}/> Pricing</h4>
                        <Table bordered={true} striped hover size={'sm'} variant={'dark'}>
                            {/*<thead>*/}
                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        <h6>description</h6>*/}
                            {/*    </td>*/}
                            {/*    <td>*/}
                            {/*        <h6>amount</h6>*/}
                            {/*    </td>*/}
                            {/*</tr>*/}
                            {/*</thead>*/}

                            <tbody>
                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        Walk-in*/}
                            {/*    </td>*/}
                            {/*    <td>*/}
                            {/*        20<BiEuro/>*/}
                            {/*    </td>*/}
                            {/*</tr>*/}

                            {details.options.map((option) => <tr>
                                <td>
                                    {option.Name}
                                </td>
                                <td>
                                    {option.price}.00&euro;
                                </td>
                            </tr>)}
                            </tbody>

                        </Table>
                    </ListGroupItem>
                    <ListGroupItem className={'py-0 mt-0'}>
                        <Button className={'me-2'} variant='secondary' onClick={handleReserve.bind(this)}
                                style={{}}>Reserve</Button>
                        <Button className={'me-2'} variant={'outline-secondary'} onClick={addEvent.bind(this, {
                            "name": faker.company.name(),
                            "price": details.price,
                            location: faker.address.cityName(),
                            image: faker.image.abstract(1024, 1024, true),
                            "Date": faker.date.soon(15),
                            "Time": details.Time,
                            "description": faker.lorem.paragraph(6),
                            "options": [{
                                "Name": "Regular", "price": parseFloat(faker.commerce.price(0, 99, 2))
                            },],
                        })}> <BiBookBookmark size={22}/></Button>
                        <Button variant={'outline-secondary'} onClick={updateEvent.bind(this, {
                            "name": faker.company.name(),
                            "price": details.price,
                            location: faker.address.cityName(),
                            image: faker.image.abstract(1024, 1024, true),
                            "Date": faker.date.soon(15),
                            "Time": details.Time,
                            "description": faker.lorem.paragraph(6),
                            "options": [{
                                "Name": "Regular", "price": parseFloat(faker.commerce.price(0, 99, 2))
                            },],
                        }, details.id)}><BiShare size={22}/> </Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>

    </Container>)
}

export default EventScreen