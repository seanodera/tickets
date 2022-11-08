import React, {useState} from 'react'
import {Button, Container, Form, FormControl, FormGroup, FormLabel, FormText} from 'react-bootstrap'
import {sendPassReset} from "../podo/firebaseFunctions";

const ForgotPassword = () => {
    const [errorObject,setErrorObject] = useState({})

    async function handleClick() {
        let email = document.getElementById('emailInput');
        let _errorObject = await sendPassReset(email);
        setErrorObject(_errorObject);
    }

  return (
    <Container style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }} fluid>
        <Form style={{
            width: '40%',
            height: '50%'
        }}> 
        <FormGroup>
            <FormLabel>Enter your email</FormLabel>
            <FormControl placeholder='enter your email' id='emailInput'/>
            </FormGroup>
            <FormGroup>
                <Container className='mt-2 mx-0' fluid style={{width: '100%', height: '200px', backgroundColor: '#707070', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
            Captcha Box
        </Container>
            </FormGroup>
            <FormGroup className='mt-2'>
                <Button style={{
        width: '100%'
    }} size='lg' onClick={handleClick.bind(this)} >Send Verification</Button>
            </FormGroup>
            {!errorObject.success && ( <FormText>{errorObject.text}</FormText>)}
            </Form></Container>
  )
}

export default ForgotPassword