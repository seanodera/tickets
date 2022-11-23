import React, {useEffect, useState} from "react";
import {BiCreditCard} from "react-icons/bi";
import {SiAmericanexpress, SiDiscover, SiMastercard, SiVisa} from "react-icons/si";
import {faker} from "@faker-js/faker";
import {
    Badge,
    Button,
    Card,
    Col,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    Row,
    Table
} from "react-bootstrap";
import {AiOutlineEllipsis} from "react-icons/ai";


const PaymentMethods = () => {
    const [cards, setCards] = useState([]);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('MM/YY');
    useEffect(() => {
        let cardList = [
            <BiCreditCard size={22}/>,
            <SiVisa size={22} color={'blue'}/>,
            <SiMastercard size={22}/>,
            <SiDiscover size={22}/>,
            <SiAmericanexpress size={28}/>
        ]
        let tempList = [];
        let defaultCard = true;
        for (let i =0; i < 4; i++){
            tempList.push({
                id: i,
                card: '1234 56** **** 2345',
                name: faker.name.fullName(),
                expiry: faker.date.future(3),
                def: defaultCard,
                cardWidget: cardList.at((Math.random() * cardList.length) )
            });
            defaultCard = false;
        }
        setCards(tempList);
    },[])
    return (<Container>

        <Container className={' py-3'}>
            <Row>
                <Col md={'5'}>
                    <Card className={'glassEffect py-2 px-2 rounded-2'} style={{
                        maxWidth: '500px'
                    }}>
                        <h6 className={'text-end'}>Credit/debit</h6>
                        <Form>
                            <FormGroup>
                                <FormLabel> Card number</FormLabel>
                                <FormControl onChange={(e) => setCardNumber(e.target.value)} placeholder={'Card Number'}/>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <FormLabel> Expires On</FormLabel>
                                        <FormSelect placeholder={'MM/YY'}
                                                    onChange={(e) => setExpiry(e.target.value)}>
                                           <option>MM/YY</option>
                                        </FormSelect>
                                    </Col>
                                    <Col>
                                        <FormLabel>CVV</FormLabel>
                                        <FormControl placeholder={'CVV'}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Card>
                    <h1 className={'text-white align-text-bottom'}></h1>
                    <span className={'d-flex flex-row flex-fill justify-content-between px-2'}>
                        <BiCreditCard size={28}/>
                        <SiVisa size={28}/>
                        <SiMastercard size={28}/>
                        <SiDiscover size={28}/>
                        <SiAmericanexpress size={28}/>
                    </span>
                    <Form className={'py-2'}>
                        <FormGroup>
                            <FormLabel>Card Name(optional)</FormLabel>
                            <FormControl placeholder={'Card Name'}/>
                        </FormGroup>
                        <FormGroup className={'py-1'}>
                            <Form.Check className={'rounded-1'} type={'switch'} label={'Use as Default'}/>
                        </FormGroup>
                        <FormGroup className={'py-1'}>
                            <Form.Check type={'switch'} label={'Company Card'}/>
                        </FormGroup>
                        <Button className={'glassEffect'}>Save Card</Button>
                    </Form>
                </Col>
                <Col className={'fillSpace verticalCenter'}>
                    <Table size={'sm'}>
                        <tbody>
                        {cards.map((value, index) => (<tr key={index}>
                            <td>
                                {value.cardWidget}
                            </td>
                            <td>
                                <h6 className={'text-white'}>{value.name}</h6>
                                <p>{value.card}</p>
                            </td>
                            <td>
                                {value.def? <Badge bg={'success'}>Default</Badge> : <div/>}
                            </td>
                            <td>
                                <Badge className={'glassEffect rounded-circle text-secondary'} bg={'primary'}><AiOutlineEllipsis size={22} className={''}/></Badge>
                            </td>
                        </tr>))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    </Container>)
}

export default PaymentMethods;