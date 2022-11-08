
import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, ListGroup, ListGroupItem, Container, Button } from 'react-bootstrap';
import {IoLocationOutline} from 'react-icons/io5'
import {MdOutlineDescription} from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { getEventDetails } from '../podo/firebaseFunctions';
const EventScreen = () => {
    let {id} = useParams();
 
    const _ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [details, setDetails] = useState({});
    useEffect(() => {
      // eslint-disable-next-line
      setWidth(_ref.current ? _ref.current.offsetWidth : 0);
      setHeight(width/2);
      console.log('The width is:', width, 'and height is:', height);

      getEventDetails(id).then((dets) => {
          setDetails(dets);
          console.log('details are', dets);
      });

    }, [height, width, id])
    function handleReserve(){
        if(details.options.length === 1){

        } else {

        }
    }
  return (
    <Container fluid>
        <Row>
            <Col md={'8'}>
                <img src={details.image} alt='poster' style={{
                    width: '100%',
                    aspectRatio: '1',
                }}/>
            </Col>
            <Col>
                <ListGroup>
                    <ListGroupItem>
                        <h4><MdOutlineDescription/> Description</h4>
                        <p>{details.description}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4> <IoLocationOutline size={28}/> Location</h4>
                        {/*<Container fluid ref={_ref} className='py-0 px-0 my-0 mx-0'>*/}
                        {/*    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13046.2860819164!2d33.314930399999994!3d35.1673054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1a65601ddee1%3A0xb417b59ceaab7506!2sUniversity%20of%20Nicosia!5e0!3m2!1sen!2s!4v1648572216520!5m2!1sen!2s"*/}
                        {/*            title='maps' width={`${width - 30}`} height={`${height}`} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
                        {/*</Container>*/}
                    </ListGroupItem>
                    <ListGroupItem>
                        <h4>Pricing</h4>
                        <Button size='lg' variant='primary' style={{

                        }}>Reserve</Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>

    </Container>
  )
}

export default EventScreen