import React, {useState, useEffect} from 'react'
import {Button, Container, FormGroup, Nav, Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import {AiOutlineSearch} from 'react-icons/ai'
import { IoPersonCircle } from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'
import {getUser, getUserDetails} from '../podo/firebaseFunctions'


const Header = () => {
  const [loggedIn, setLoggedIn]= useState(false);
  const [details, setDetails] = useState({});
  const [user, setUser] = useState(getUser());

  useEffect(() => {
      setUser(getUser())
   console.log(user);
   if(user){
     setLoggedIn(true);
     getUserDetails(user.uid).then((det) => {
      setDetails(det);
     });
     
   } else {
       setUser(getUser());
     setLoggedIn(false);
   }
  }, [user])
  
  return (
    <header>
        <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect >
    <Container>
    <LinkContainer to='/'>
            <Navbar.Brand>TicketsCY</Navbar.Brand>
          </LinkContainer>

     <FormGroup className='searchBar ps-1 py-0' >
        <span >
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
           height: '40px',
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

         <LinkContainer to={loggedIn?   '/profile' : '/login'}>
           <NavLink style={{display: 'inline-flex'}}>
           <IoPersonCircle color='#FF1744' /> {loggedIn ? (`${details.firstName} ${details.lastName}`) : ('Sign in')}
           </NavLink>
         </LinkContainer>
           <LinkContainer to={'/sell'}>
              <Button variant={'primary'} size={'sm'}>Become A seller</Button>
           </LinkContainer>

       </Nav>
     </NavbarCollapse>
  
      
    </Container>
  </Navbar></header>
  )
}

export default Header