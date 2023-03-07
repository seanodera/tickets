import React, {useEffect, useState} from "react";
import LoadingScreen from "../components/LoadingScreen";
import {Col, Container, Row} from "react-bootstrap";
import Poster from "../components/Poster";
import {getEvents} from "../podo/firebaseFunctions";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getEvents().then((list) => {
            setEvents(list);
        })
    },[])
    if (events.length === 0) {
        return (<LoadingScreen/>)
    }
    return (<Container className={'py-3'}>
        <div className={'d-flex flex-row justify-content-between mb-3'}>
            <div>
                <h2 className={'text-secondary text-start'}>
                    All Events
                </h2>
            </div>
            <div>
                Controls Area
            </div>
        </div>
        <Row className={'g-3'}>
            {events.map((_event, index) => <Col md={'3'} key={index}><Poster eventDetails={_event}/> </Col>)}
        </Row>
    </Container>)
}

export default Events;