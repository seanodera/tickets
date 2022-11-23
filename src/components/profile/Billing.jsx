import React, {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";
import {Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Table} from "react-bootstrap";
import {monthString} from "../../podo/utils";
import {BiEuro} from "react-icons/bi";

const Billing = () => {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [vat, setVat] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [recentTransactions, setRecentTransactions] = useState([]);

    useEffect(() => {
        let methods = ['Card-1234', 'Bitcoin', 'Metamask', 'Revolut', 'Card-4973']
        let tempList = [];
        for (let i = 0; i <= 10; i++) {
            tempList.push({
                id: i,
                date: faker.date.recent(30),
                invoiceNum: Math.floor((Math.random() * 2001) + 1500),
                method: methods.at(Math.floor(Math.random() * (methods.length))),
                link: faker.image.unsplash.nature(),
                total: faker.commerce.price(0, 200)
            })
        }
        let sortedList = tempList.sort((a, b) => (new Date(a.date).getUTCSeconds()) - (new Date(b.date).getUTCSeconds()))
        setRecentTransactions(sortedList);
    }, [])
    return (<Container className={'py-3'}>
        <Form>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Address 1</FormLabel>
                        <FormControl onChange={(e) => setAddress1(e.target.value)} value={address1}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Country</FormLabel>
                        <FormControl onChange={(e) => setCountry(e.target.value)} value={country}/>

                    </FormGroup>
                    <FormGroup>
                        <FormLabel>City</FormLabel>
                        <FormControl onChange={(e) => setCity(e.target.value)} value={city}/>

                    </FormGroup>

                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>Address 2</FormLabel>
                        <FormControl onChange={(e) => setAddress2(e.target.value)} value={address2}/>

                    </FormGroup>
                    <FormGroup>
                        <FormLabel>VAT Number</FormLabel>
                        <FormControl onChange={(e) => setVat(e.target.value)} value={vat}/>

                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl onChange={(e) => setZipCode(e.target.value)} value={zipCode}/>
                    </FormGroup>

                </Col>
            </Row>
            <Button className={'my-2 rounded-2'} variant={'secondary'}> Save</Button>
        </Form>
        <Container className={'pt-3 text-start m-0'} style={{
            width: '75%',
        }}>
            <h4 className={'text-white'}>Billing History</h4>
            <Table size={'sm'}>
                <thead>
                <tr>
                    <td>
                        Date
                    </td>
                    <td>
                        Invoice
                    </td>
                    <td>
                        Amount
                    </td>
                    <td>
                        Payment Method
                    </td>
                    <td/>
                </tr>
                </thead>
                <tbody>
                {recentTransactions.map((value) => {
                    let date = new Date(value.date);
                    return (<tr key={value.id}>
                        <td>
                            {date.getDate() + ' ' + monthString(date.getMonth()) + ', ' + date.getFullYear()}
                        </td>
                        <td>
                            #{value.invoiceNum}
                        </td>
                        <td>
                            <BiEuro/>{value.total}
                        </td>
                        <td>
                            {value.method}
                        </td>
                        <td>
                            <Button variant={'link'} className={'text-secondary'} href={value.link}>Link</Button>
                        </td>
                    </tr>)
                })}
                </tbody>
            </Table>
        </Container>
    </Container>)
}

export default Billing;