import './bootstrap.css';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import EventScreen from './screens/EventScreen';
import Login from './screens/Login';
import { useState, useEffect } from 'react';
import EmailConfirmation from './screens/EmailConfirmation';
function App() {
  
  return (
    <Router >
      <Routed/>
    </Router>
  );
}


const Routed = () => {
  let location = useLocation();
  const [styleMain, setStyleMain] = useState({});
 const [mainClassName, setMainClassName] = useState('');
 const [hide, setHide] = useState(false);
  useEffect(() => {
    if (location.pathname === '/login'|| location.pathname === '/confirm'){
      setHide(true);
      setStyleMain({height: '100vh', backgroundColor: '#262626'})
      setMainClassName('py-0');
    } else {
      setHide(false);
     setStyleMain({});
     setMainClassName('py-3')
    }
  }, [location.pathname])
  
  return (
    <>
      {!hide && <Header/>}
      <main className={mainClassName} style={styleMain}>
        <Container style={styleMain}>
          <Routes>
            <Route path='/confirm' element={<EmailConfirmation/>}/>
            <Route path='/login' element={<Login/>} exact/>
            <Route path='/' element={<HomeScreen/>} exact/>
            <Route path='/event/:id' element={<EventScreen/>}/>
            </Routes>
         {/* <HomeScreen/> */}
        </Container>
      </main>
      {!hide && <Footer/>}
    </>
  )
}



export default App;
