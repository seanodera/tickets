import './App.css';
import './css/App.scss';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import EventScreen from './screens/EventScreen';
import Login from './screens/Login';
import {useState, useEffect} from 'react';
import EmailConfirmation from './screens/EmailConfirmation';
import ForgotPassword from './screens/ForgotPassword';
import VenueScreen from './screens/VenueScreen';
import ActionUrlHandler from "./screens/ActionUrlHandler";
import SellerScreen from "./screens/SellerScreen";
import Profile from "./screens/Profile";
import Logout from "./screens/Logout";

function App() {

    return (
        <Router>
            <Routed/>
        </Router>
    );
}


const Routed = () => {
    let location = useLocation();

    const [hide, setHide] = useState(false);
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/confirm' || location.pathname === '/forgotpassword' || location.pathname === '/logout') {
            setHide(true);

        } else {

            setHide(false);

        }
    }, [location.pathname])

    return (
        <div style={{height: '100vh'}}>
            {!hide && <Header/>}
            <main>

                <Routes>
                    <Route path='/confirm' element={<EmailConfirmation/>}/>
                    <Route path='/login' element={<Login/>} exact/>
                    <Route path='/' element={<HomeScreen/>} exact/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/sell'} element={<SellerScreen/>} exact/>
                    <Route path={'/logout'} element={<Logout/>}/>
                    <Route path='/event/:id' element={<EventScreen/>}/>
                    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
                    <Route path='/venue/:id' element={<VenueScreen/>}/>
                    <Route path={'/auth/action?mode=:action&oobCode=:oob'} element={<ActionUrlHandler/>}/>
                </Routes>


            </main>
            {!hide && <Footer/>}
        </div>
    )
}


export default App;
