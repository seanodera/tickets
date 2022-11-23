import React, {useState} from "react";
import {Button, Container, Form, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";

const ChangePassword = () => {
    const [pass, setPass] = useState();
    const [newPass, setNewPass] = useState();
    const [repeatPass, setRepeatPass] = useState()

    return (<Container className={'py-3'} style={{
        maxWidth: '500px'
    }}>
        <Form>
            <FormGroup>
                <FormLabel>Enter old Password</FormLabel>
                <FormControl type={'password'} placeholder={'old password'} onChange={(e) => setPass(e.target.value)}/>
            </FormGroup>
            <hr/>
            <FormGroup className={''}>
                <FormLabel>Enter new Password</FormLabel>
                <FormControl type={'password'} placeholder={'New password'} onChange={(e) => setNewPass(e.target.value)}/>
            </FormGroup>
            <FormGroup className={'mb-3 mt-2'}>
                <FormLabel>Repeat Password</FormLabel>
                <FormControl type={'password'} placeholder={'repeat password'}  onChange={(e) => setRepeatPass(e.target.value)}/>
                <FormText className={'text-danger'}>{(repeatPass === newPass) ? '' : 'Passwords don\'t match!'}</FormText>
            </FormGroup>
            <Button variant={'secondary'} onClick={() => console.log(repeatPass, ' and ', newPass)}>Change</Button>
        </Form>
    </Container>)
}
export default ChangePassword;