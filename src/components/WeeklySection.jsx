import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {faker} from "@faker-js/faker";
import {LinkContainer} from "react-router-bootstrap";

const WeeklySection = () => {

    return (<div>
        <div className={'bg-secondary rounded-3'}>
            <div className={'glassEffect rounded-3 py-3 px-2'}>

                <Row className={'mt-3 mb-2 py-1 pe-0 ps-0'}>
                    <Col md={'auto'}>
                        <h3 className={'text-white text-start'}>Weekly Vibe</h3>
                    </Col>
                    <Col className={'text-end'}>
                       <p>View our regular Partying and clubbing spots through out the week</p>
                    </Col>

                </Row>
                <Row className={'gx-3 gy-2 px-2 mt-2 d-flex flex-row justify-content-center'}>
                    <Col md={'6'} className={'glassEffect rounded-4 py-2 px-2'}>
                        <h5 className={'text-white'}>Monday</h5>
                       <Row>
                           <Col>
                               <LinkContainer to={'/'}>
                                   <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                       <Card.Img variant={'top'} className={'rounded-top'}
                                                 src={faker.image.abstract(500, 500, true)}/>
                                       <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                       <Card.Text className={'text-white px-1'}>Rnb Night</Card.Text>


                                   </Card>
                               </LinkContainer></Col>
                           <Col>
                               <LinkContainer to={'/'}>
                                   <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                       <Card.Img variant={'top'} className={'rounded-top'}
                                                 src={faker.image.abstract(500, 500, true)}/>
                                       <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                       <Card.Text className={'text-white px-1'}>Rnb Night</Card.Text>


                                   </Card>
                               </LinkContainer></Col>
                       </Row>
                    </Col>
                    <Col md={'3'} className={'py-2'}>
                        <h5 className={'text-white'}>Tuesday</h5>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Lost & Found</Card.Title>
                                <Card.Text className={'text-white px-1'}>Bar</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col md={'3'} className={'fillSpace'}>
                        <h6 className={'text-white'}>Wednesday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Ithaki Venue</Card.Title>
                                <Card.Text className={'text-white px-1'}>Esn wednesday</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col md={'3'}>
                        <h6 className={'text-white'}>Thursday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>The Ginery</Card.Title>
                                <Card.Text className={'text-white px-1'}>Mr. Cause</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col md={'3'}>
                        <h6 className={'text-white'}>Friday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col md={'3'}>
                        <h6 className={'text-white'}>Saturday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col md={'3'}>
                        <h6 className={'text-white'}>Sunday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>State Club</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={'py-3'}/>
        <div className={'bg-secondary rounded-3'}>
            <div className={'glassEffect rounded-3 py-3 px-2'}>
                <h4 className={'text-white'}>Weekly Vibe</h4>
                <Row className={'gx-1 gy-2 mt-2 d-flex flex-row justify-content-center'}>
                    <Col>
                        <h6 className={'text-white'}>Monday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                <Card.Text className={'text-white px-1'}>Rnb Night</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Tuesday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Lost & Found</Card.Title>
                                <Card.Text className={'text-white px-1'}>Bar</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Wednesday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Ithaki Venue</Card.Title>
                                <Card.Text className={'text-white px-1'}>Esn wednesday</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Thursday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>The Ginery</Card.Title>
                                <Card.Text className={'text-white px-1'}>Mr. Cause</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Friday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Saturday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>Club Teez</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <h6 className={'text-white'}>Sunday</h6>
                        <LinkContainer to={'/'}>
                            <Card className={'glassEffect rounded-3 rounded-top pb-2'}>
                                <Card.Img variant={'top'} className={'rounded-top'}
                                          src={faker.image.abstract(500, 500, true)}/>
                                <Card.Title className={'text-white px-1 pt-2'}>State Club</Card.Title>
                                <Card.Text className={'text-white px-1'}>Popping Bottles</Card.Text>


                            </Card>
                        </LinkContainer>
                    </Col>
                </Row>
            </div>
        </div>
    </div>)
}

export default WeeklySection;