import React, {useEffect, useState} from "react";
import {recoverEmail, sendPassReset} from "../podo/firebaseFunctions";
import {Container, Form, FormGroup} from "react-bootstrap";

const EmailRecovery = ({oob}) => {
    const [restoredEmail,setRestoredEmail] = useState('');
    const [firstRun,setFirstRun] = useState(false);
    useEffect(() =>{
        recoverEmail(oob).then((code) => {
            setRestoredEmail(code.data.email);


            setFirstRun(true);
            sendPassReset(restoredEmail).catch((e) => {
                console.log(e);
            });
        });
    }, [])
    return (<div
    style={{
        width: '100vw',
        height: '100vh',
        position: 'sticky'
    }}
    ><Container>
        <Form>
            <FormGroup>

            </FormGroup>
        </Form>
    </Container>
    </div>)
}

export default EmailRecovery