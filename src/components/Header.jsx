import { getAuth } from 'firebase/auth'
import React, {useState, useEffect} from 'react'
import { Container, FormGroup, Nav, Navbar, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoPersonCircle } from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'
import { getUserDetails } from '../podo/firebaseFunctions'


const Header = () => {
  const [loggedIn, setLoggedIn]= useState(false);
  const [details, setDetails] = useState({});
  let Auth = getAuth();
  useEffect(() => {
   let user = Auth.currentUser;
   if(user){
     setLoggedIn(true);
     getUserDetails(user.uid).then((_dets) => {
      setDetails(_dets);
     });
     
   } else {
     setLoggedIn(false);
   }
  }, [Auth.currentUser])
  
  return (
    <header>
        <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect>
    <Container>
    <LinkContainer to='/'>
            <Navbar.Brand>TicketsCY</Navbar.Brand>
          </LinkContainer>

     <FormGroup className='SearchBar px-0 py-0' style={{backgroundColor: 'hsla(0,0%,100%,0.2)'}}>
        <span style={{paddingTop: '8.5px', paddingBottom: '8.5px', paddingLeft: '14px'}}>
        <AiOutlineSearch color='#FF1744' size={28} /> </span>
        <input className='py-0'
        type="text"
         maxLength="2048" 
         name="search" 
         autoCapitalize="off" 
         autoComplete="off" 
         autoCorrect="off"
          spellCheck="false"
           title="Search input" 
           placeholder="Event, artist or team" 
         style={{
             height: '44px',
             minWidth: '200px',
             width: 'max-content',
             border: '0',
             outline: '0',
             paddingLeft: '14px',
             color: 'white',
             backgroundColor: 'transparent'
           }}/>
      </FormGroup>

    
    <NavbarToggle type='button' aria-controls='basic-navbar-nav' />
     <NavbarCollapse id='basic-navbar-nav' className='justify-content-end'>
       <Nav className='ml-auto'>
         <LinkContainer to={'/sell'}>
         <NavLink>
           Sell
         </NavLink>
         </LinkContainer>
         <LinkContainer to={'/login'}>
           <NavLink>
           <IoPersonCircle color='#FF1744' style={{display: 'flex'}}/> {loggedIn ? (`${details.firstName} ${details.lastName}`) : ('Sign in')}
           </NavLink>
         </LinkContainer>
       </Nav>
     </NavbarCollapse>
  
      
    </Container>
  </Navbar></header>
  )
}

export default Header