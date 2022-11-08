import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import EmailConfirmation from "./EmailConfirmation";
import EmailRecovery from "./EmailRecovery";
import PasswordReset from "./PasswordReset";

const ActionUrlHandler = () =>{
  let {mode, oob} = useParams();
  let history = useNavigate();
    function moveTo404(){
        history('/404');
        return 'error';
    }
    return (
        <>
            {mode === 'verifyEmail'? <EmailConfirmation/>
                : (mode === 'recoverEmail') ? <EmailRecovery/>
                    : (mode === 'resetPassword')? <PasswordReset/> : <>{moveTo404()}</>}

        </>
    )
}

export default ActionUrlHandler