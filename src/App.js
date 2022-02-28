import logo from './logo.svg';
import './bootstrap.css';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import EventScreen from './screens/EventScreen';
function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact/>
            <Route path='/event/:id' element={<EventScreen/>}/>
            </Routes>
         {/* <HomeScreen/> */}
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
