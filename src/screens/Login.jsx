import { async } from '@firebase/util'
import React, { useState } from 'react'
import { Alert, Button,Col, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row} from 'react-bootstrap'
import {IoChevronBack} from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'
import { createUser, signIn } from '../podo/firebaseFunctions'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [second, setSecond] = useState(false);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('0');
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    let history = useNavigate();
    function changePage (){
        setSecond(true);
        setEmail( document.getElementById('Email1').value);
        setpass(document.getElementById('passId').value);
    }
    async function handleSignUp(){
        let fName = document.getElementById('firstNameId').value;
        let lName = document.getElementById('lastNameId').value;
        let phone = document.getElementById('phoneId').value;
        var successObj = await createUser({
            'firstName': fName,
            'lastName' : lName,
            'phone': phone,
            'email': email,
        }, pass);
        if(successObj.success){
            setShow(true);
            setErrorMessage('Login Successfull');
            history('/');
        } else {
            setShow(true);
            setErrorMessage(successObj.errorMessage);
        }
    }

    async function handleSignIn(){
        let email = document.getElementById('Email1').value;
        let pass = document.getElementById('passId').value;
        var successObj = await signIn(email,pass);
        if(successObj.success){
            history('/');
        } else {
            setShow(true);
            setErrorMessage(successObj.errorMessage);
        }
    }
  return (
    <Container style={{
        height: '100vh'}} fluid>
            <Row>
                <Col style={{
        maxHeight: '100vh'
    }}>
         {second &&     <>
            <a onClick={setSecond.bind(this, false)} style={{display: 'inline-flex', alignItems: 'flex-start'}}>
                <IoChevronBack size={32} color='#FF1744'/>
            </a>
            <Container className='mt-3'>
                <Form>
                    <FormGroup>
                    <Alert dismissible variant='primary' id='dialog' show={show}>
        <Button className='btn-close' data-bs-dismiss="alert" onClick={setShow.bind(this,false)}></Button>
        <p className='mb-0'>{errorMessage}</p>
    </Alert>
                    </FormGroup>
                    <FormGroup>
                    <Row>
                        <Col>
                        <FormLabel className='mt-0'>First Name</FormLabel>
                        <FormControl id='firstNameId' placeholder='First Name'/>
                        <FormText muted >First Name</FormText>
                        </Col>
                        <Col>
                        <FormLabel className='mt-0'>Last Name</FormLabel>
                        <FormControl id='lastNameId' placeholder='Last Name'/>
                        <FormText muted >Second Name</FormText>
                        </Col>
                    </Row>
                    </FormGroup>
                    <FormGroup>
                    <FormLabel className='mt-0'>Phone Number</FormLabel>
                        <FormControl id='phoneId' placeholder='Phone Number'/>
                        <FormText muted >Phone Number</FormText>
                    </FormGroup>
                    <FormGroup className='pt-3'>
                        <Button size='lg' style={{width: '100%'}} onClick={handleSignUp.bind(this)}>Create an Account</Button>
                    </FormGroup>
                 
                </Form>
            </Container>
    
    </>}
               {!second && <>
        <LinkContainer to={'/'} style={{display: 'inline-flex', alignItems: 'flex-start'}}>
                <IoChevronBack size={32} color='#FF1744'/>
            </LinkContainer>
    <Container className='mt-3' style={{}}>
        <Form>
            <FormGroup>
            <Alert dismissible variant='primary' id='dialog' show={show}>
        <Button className='btn-close' data-bs-dismiss="alert" onClick={setShow.bind(this,false)}></Button>
        <p className='mb-0'>Can't sign in{errorMessage}</p>
    </Alert>
            </FormGroup>
        <FormGroup>
      <FormLabel htmlFor="exampleInputEmail1" className="mt-0">Email address</FormLabel>
      <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="exampleInputPassword1" className="mt-3">Password</FormLabel>
      <FormControl type="password" className="form-control" id="passId" placeholder="Password"/>
      <a><FormText className='text-right'>forgot password?</FormText></a>
    </FormGroup>
    <FormGroup>
  <Row className='mt-3 gx-1'>
      <Col>
      <Button size='lg'  variant='primary' style={{width: '100%'}} onClick={handleSignIn.bind(this)}>Login</Button>
      </Col>
      <Col>
      <Button size='lg' variant='outline-primary' style={{width: '100%'}} onClick={changePage.bind(this)} >Sign Up</Button>
      </Col>
  </Row>
  
 </FormGroup>
        </Form>
        </Container>
    </>}
<Form>
<Container className='mt-0'>
<p className='text-center my-0'><hr/></p>
  <FormGroup>
  <Button size='lg' variant='outline-primary' style={{width: '100%'}}>Google</Button>
  <Button size='lg' className='my-1' variant='outline-primary' style={{width: '100%'}}>Facebook</Button>
  </FormGroup>

    <FormGroup className='py-0 text-center'>
        <hr/>
        <small className='text-muted py-0'>By creating an account, you agree and accept our <a href='#terms'>terms</a> and <a href='#conditions'>Privacy policy</a></small>
        </FormGroup>
</Container>
</Form>
    </Col>
              
    <Col className='pt-2'>
    <img src='/assets/login.jpeg' alt='login' style={{
        width: '60vw',
        height: '95vh',
        objectFit: 'cover',
    }}/>
    </Col>
</Row>

    </Container>
  )}




export default Login