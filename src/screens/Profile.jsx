import React, {useEffect, useState} from "react";
import {getUser, getUserDetails} from "../podo/firebaseFunctions";
import {Container, Tab, Tabs} from "react-bootstrap";
import {useNavigate} from "react-router";
import LoadingScreen from "../components/LoadingScreen";
import AccountDetails from "../components/profile/AccountDetails";
import PaymentMethods from "../components/profile/PaymentMethods";
import Billing from "../components/profile/Billing";
import ChangePassword from "../components/profile/ChangePassword";




const Profile = () => {
    let history = useNavigate();
    const [user, setUser] = useState(getUser());
    const [details, setDetails] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (user !== null) {
            getUserDetails(user.uid).then((_dets) => {
                setDetails(_dets);
                setLoaded(true);
            });
        }

    }, [loaded, user])
    if (details == null || user == null) {
        console.log(loaded)
        setTimeout(() => {
            if (user == null) {
                history('/login')
                setUser(getUser());
            }
            console.log('timer running');

        }, 2000)
        return (<LoadingScreen/>)
    } else return (<Container className={'pb-2 pt-3 mx-5 px-4'}>
        <h1 className={'text-white'}>Profile</h1>
        <Tabs defaultActiveKey={'profile'} fill>
            <Tab title={'Profile'} eventKey={'profile'}>
          <AccountDetails details={details}/>
            </Tab>
            <Tab eventKey={'payment'} title={'Payment Methods'}>
                <PaymentMethods/>
            </Tab>
            <Tab eventKey={'changePass'} title={'Change Password'}>
                <ChangePassword/>
            </Tab>
            <Tab title={'Preferences'} eventKey={'preference'}>

            </Tab>
            <Tab title={'Billing'} eventKey={'billing'}>
                <Billing/>
            </Tab>
        </Tabs>

    </Container>)
}

export default Profile