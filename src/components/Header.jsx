import React from 'react'
import { Container, Form, FormGroup, Nav, Navbar, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoPersonCircle } from 'react-icons/io5'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {

  return (
    <header>
        <Navbar variant='dark' bg='primary' expand='lg' collapseOnSelect>
    <Container>
    <LinkContainer to='/'>
            <Navbar.Brand>TicketsCY</Navbar.Brand>
          </LinkContainer>

     <Form>
     <FormGroup className='SearchBar' style={{backgroundColor: 'hsla(0,0%,100%,0.2)'}}>
        <span style={{paddingTop: '8.5px', paddingBottom: '8.5px', paddingLeft: '14px'}}>
        <AiOutlineSearch color='#FF1744' size={28} /> </span>
        <input className='py-3'
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
     </Form>

    
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
           <IoPersonCircle color='#FF1744' style={{display: 'flex'}}/> Sign In
           </NavLink>
         </LinkContainer>
       </Nav>
     </NavbarCollapse>
  
      
    </Container>
  </Navbar></header>
  )
}

export default Header