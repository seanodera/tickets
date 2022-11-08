import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineCalendar} from "react-icons/ai";
import {BiBookBookmark} from "react-icons/bi";
import {BsCurrencyEuro} from "react-icons/bs";
import {LinkContainer} from "react-router-bootstrap";
import {getAbbreviation, monthStringShort} from "../podo/utils";


const HomeAd = ({advert}) => {

    let date = new Date(advert.date);

    return (<div style={{
        backgroundImage: `url("${advert.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        <Container fluid
                   style={{
                       width: "100%", minHeight: '40vh',
                       aspectRatio: '2.5',
                       backdropFilter: 'blur(0px)',
                       WebkitBackdropFilter: 'blur(0px)',
                   }}
                   className=' px-3'>
            <Row className={'ms-5 fillSpace'}>
                <Col className={'verticalCenter'} md={'4'}>
                    <div className={''}>
                        <h2>{advert.title}</h2>
                        <Row className={'mb-1'} md={'auto'}>
                            <Col md={'auto'}>
                           <span>
                               <IoLocationOutline/> {advert.location}
                           </span>
                            </Col>
                            <Col md={'auto'}>
                           <span>
                               <AiOutlineCalendar/> {monthStringShort(date.getMonth())}, {getAbbreviation(date.getDay())}
                           </span>
                            </Col>
                            <Col md={'auto'}>
                          <span>
                               <BsCurrencyEuro/> {advert.price}
                          </span>
                            </Col>
                        </Row>
                        <p className={'limitLines'}>
                            {advert.description}
                        </p>
                        <span>
                      <LinkContainer to={'/' + advert.id}>
                           <Button variant={'secondary'}>
                           Visit event
                       </Button>
                      </LinkContainer>
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