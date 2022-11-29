import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import LoadingScreen from "../components/LoadingScreen";
import {logOut} from "../podo/firebaseFunctions";

const Logout = () => {
    const [success, setSuccess] = useState(null);

    function handleSignOut() {
        logOut().then((value)=> setSuccess(value));
    }

    useEffect(() => {
        handleSignOut();
    },[]
    )
    return(success === null)? <LoadingScreen/> : <Container className={'text-center'} style={{
        maxWidth: '500px'
    }}>
        <img src={'/assets/logoTrans.png'} alt={'logout'} style={{
            width: '100%', maxWidth:'500px', aspectRatio: 1.2, objectFit: 'cover'
        }
        }/>
        <p>
            {(success === true)? 'You have successfully logged out. Cant wait to see you again' : 'An Error Occured'}
        </p>
        {(success) ?? <Button onClick={handleSignOut.bind(this)} variant={'primary'}>Try Again</Button> }
        <LinkContainer to={'/'}>
            <Button variant={'primary'}> HomePage</Button>
        </LinkContainer>
    </Container>
}

export default Logout;