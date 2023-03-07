import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AccountPicture from '../components/account.svg';
import CreatePicture from '../components/create.svg';
import {AiOutlineCheckCircle} from "react-icons/ai";
import {MdPeople, MdSupportAgent} from "react-icons/md";
import {BiCheckShield} from "react-icons/bi";
import Paid from '../components/paid.svg'

const SellerWidget = ({icon, title, text}) => {

    return (<Row>
        <Col md={'auto'}>
            {icon}
        </Col>
        <Col className={'text-start'}>
            <h5 className={'text-secondary'}>{title}</h5>
            <p>{text}</p>
        </Col>
    </Row>)
}

const SellerScreen = () => {

    return (<div className={'justify-content-center text-center'}>
        <Container fluid className={'mx-0 py-5 justify-content-center bg-secondary'}>
            <h1 className={'text-primary'}>Sell On Tickets Cy</h1>
            <p>Why us you wonder? Well Let me tell you</p>
        </Container>
        <Container className={'py-5'}>
            <h4 className={'text-primary mb-4'}>You’re Covered When You Sell Tickets With TicketsCy</h4>
            <Row>
                <Col md={'6'}>
                    <SellerWidget icon={<AiOutlineCheckCircle size={40}/>} title={'Hassle Free'}
                                  text={'When you list with us, we’ll help manage your entire transaction. From transfers to\n payments we have you covered every step of the way.'}/>

                </Col>
                <Col md={'6'}>
                    <SellerWidget icon={<MdPeople size={40}/>} title={'Reach More Buyers'}
                                  text={'Tickets Cy attracts thousands of fans looking for tickets everyday, giving you access to sell your tickets to any fan, anywhere.'}/>
                </Col>
            </Row>
            <Row className={'pt-3'}>
                <Col md={'6'}>
                    <SellerWidget icon={<MdSupportAgent size={40}/>} title={'We’re By Your Side'}
                                  text={'Our dedicated team is with you from the moment you purchase tickets to the moment you find out you can’t go. When you have questions about selling tickets, we’re here to help.'}/>

                </Col>
                <Col md={'6'}>
                    <SellerWidget icon={<BiCheckShield size={40}/>} title={'Ticket Protection'}
                                  text={'When you buy and sell your tickets with Tickets Cy, ticket protection comes standard. The ticket gets reissued in the buyer’s name and you get peace of mind.'}/>

                </Col>
            </Row>
        </Container>
        <div className={'bg-dark mt-3 '}><Container className={'py-5 px-5'}>
            <h4 className={'text-primary'}>Sell Your tickets in 3 easy steps</h4>
            <Row>
                <Col md={'4'}>
                    <div className={'mb-1'} style={{
                        width: '100%',
                        aspectRatio: 1
                    }}>
                        <img src={AccountPicture} alt={'un draw illustration'} style={{
                            width: '100%', aspectRatio: 1, objectFit: 'contain'
                        }}/></div>
                    <h5 className={'text-primary fw-bold'}>Create Account</h5>
                    <p>The first step it to create an account and go visit the seller website at <a
                        href={'https://dashboard.ticketscy.shop'}>dashboard.ticketscy.shop</a></p>
                </Col>
                <Col md={'4'}>
                    <div className={'mb-1'} style={{
                        width: '100%',
                        aspectRatio: 1
                    }}>
                        <img src={CreatePicture} alt={'create'} style={{
                            width: '100%', aspectRatio: 1, objectFit: 'contain'
                        }}/></div>
                    <h5 className={'text-primary fw-bold'}>Create Event</h5>
                    <p> Then you create your event on our dedicated seller website. The site also allows you to edit and
                        change your event.</p>
                </Col>
                <Col md={'4'}>
                    <div className={'mb-1'} style={{
                        width: '100%',
                        aspectRatio: 1
                    }}><img src={Paid} alt={'un draw paid'} style={{
                        width: '100%',
                        aspectRatio: 1
                    }}/></div>
                    <h5 className={'text-primary fw-bold'}>Get Paid</h5>
                    <p>Tell us how you’d like to get paid and we’ll handle the rest.</p>
                </Col>
            </Row>
        </Container></div>

    </div>)
}

export default SellerScreen;