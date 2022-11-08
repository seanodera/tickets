import React from 'react'
import { Button, Container} from 'react-bootstrap'

const EmailConfirmation = () => {
  return (
    <>
    <Container fluid className='text-center py-3 px-3' style={{ display: 'contents', alignContent: 'center'}}>
    
        <h6>Thank you your email has been verified.</h6>
       <Button href='/login'>Click me !</Button>
   
    </Container>
    </>
  )
}

export default EmailConfirmation