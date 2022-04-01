import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'hsla(0,0%,15%,0.75)'}}>
      <Container >
      <Row>
        <Col className='text-center py-3'>
        Copyright &copy; TicketsCY
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default Footer