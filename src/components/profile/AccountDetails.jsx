import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const AccountDetails = ({details}) => {

    return (<Card className={'glassEffect my-3 py-2 px-2 rounded-2'}>
        <Row>
            <Col className={'text-center'} md={'auto'}>
                <div className={'rounded-circle text-center text-white bg-secondary customCenter'}
                     style={{
                         height: '100px', width: '100px'
                     }}>
                        <span className={'text-white'} style={{
                            fontSize: '3rem'
                        }}>{details.firstName.charAt(0) + details.lastName.charAt(0)}</span>
                </div>
                <Button variant={'link'} className={'text-secondary '}>Edit</Button>
            </Col>
            <Col className={'fillSpace justify-content-between'}>
                <h4>{details.firstName} {details.lastName}</h4>
                <Row className={'me-5 pe-5 mt-2 pt-2'}>
                    <Col md={'auto'}>
                        <h6 className={'fw-bold'}>Email</h6>
                        <p>{details.email}</p>
                    </Col>
                    <Col>
                        <h6 className={'fw-bold'}>Phone Number</h6>
                        <p>{details.phone}</p>
                    </Col>
                    <Col>
                        <LinkContainer to={'/logout'}><Button variant={'secondary'}>Sign out</Button></LinkContainer>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Card>)
}

export default AccountDetails;