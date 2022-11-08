import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineCalendar} from "react-icons/ai";
import {faker} from "@faker-js/faker";
import {BiBookBookmark} from "react-icons/bi";
import {BsCurrencyEuro} from "react-icons/bs";


const HomeAd = () => {

    return (<div style={{
        backgroundImage: 'url("/assets/cover3.jpg")', backgroundSize: 'cover',
    }}>
        <Container fluid
                   style={{
                       width: "100%",
                       aspectRatio: '2.5',
                       backdropFilter: 'blur(5px)',
                       WebkitBackdropFilter: 'blur(5px)',
                   }}
                   className=' px-3'>
            <Row className={'ms-5 fillSpace'}>
                <Col className={'verticalCenter'} md={'4'}>
                    <div className={''}>
                        <h2>Masshouse presents: Heavy K The DrumBoss</h2>
                        <Row className={'mb-1'}>
                            <Col>
                           <span>
                               <IoLocationOutline/> Nicosia
                           </span>
                            </Col>
                            <Col>
                           <span>
                               <AiOutlineCalendar/> Nov, 27th
                           </span>
                            </Col>
                            <Col>
                          <span>
                               <BsCurrencyEuro/> 20.00
                          </span>
                            </Col>
                        </Row>
                        <p>
                            {faker.lorem.lines(3)}
                        </p>
                        <span>
                       <Button variant={'secondary'}>
                           Visit event
                       </Button>
                       <Button className={'mx-3'} variant={'outline-secondary'}>
                           <BiBookBookmark size={22}/>
                       </Button>
                   </span>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>)
}

export default HomeAd;