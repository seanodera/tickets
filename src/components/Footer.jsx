import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={'bg-body'}>
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