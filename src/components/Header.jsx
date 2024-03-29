import React, {useState, useEffect} from 'react'
import {Button, Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import {LinkContainer} from 'react-router-bootstrap'
import {getUser, getUserDetails} from '../podo/firebaseFunctions'
import {useLocation} from "react-router-dom";


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [details, setDetails] = useState({});
    const [user, setUser] = useState(getUser());
    const [atHome, setAtHome] = useState(false);
    const [navbar, setNavbar] = useState(false)
    let location = useLocation();
    console.log(loggedIn, details);
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 200) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        setUser(getUser())
        console.log(user);
        if (user) {
            setLoggedIn(true);
            getUserDetails(user.uid).then((det) => {
                setDetails(det);
            });

        } else {
            setUser(getUser());
            setLoggedIn(false);
        }
        console.log(location.pathname)
        if (location.pathname === '/' || location.pathname === '/venue/0') {
            setAtHome(true)
            window.addEventListener("scroll", changeBackground)
        } else {
            setAtHome(false);

        }
        // eslint-disable-next-line
    }, [location.pathname])


    return (<header>
            <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect className={(atHome && !navbar) ? 'bg-transparent' : ''}
                    fixed={'top'} sticky={(!atHome ) ? 'top' : ''}>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>TicketsCY</Navbar.Brand>
                    </LinkContainer>


                    <NavbarToggle type='button' aria-controls='basic-navbar-nav'/>
                    <NavbarCollapse id='basic-navbar-nav' className='justify-content-center'>
                        <Nav className='justify-content-around ms-auto '>

                            {/*<LinkContainer to={loggedIn?   '/profile' : '/login'}>*/}
                            {/*  <NavLink style={{display: 'inline-flex'}}>*/}
                            {/*  <IoPersonCircle color='#FF1744' /> {loggedIn ? (`${details.firstName} ${details.lastName}`) : ('Sign in')}*/}
                            {/*  </NavLink>*/}
                            {/*</LinkContainer>*/}
                            {/*  <LinkContainer to={'/sell'}>*/}
                            {/*     <Button variant={'primary'} size={'sm'}>Become A seller</Button>*/}
                            {/*  </LinkContainer>*/}

                            <LinkContainer to={'/'}>
                                <NavLink>
                                    Home
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/events'}>
                                <NavLink>
                                    Events
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/venues'}>
                                <NavLink>
                                    Venues
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/'}>
                                <NavLink>
                                    About
                                </NavLink>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>

                    <NavbarCollapse className={'justify-content-end'}>
                        <Nav className={'ml-auto'}>
                            <LinkContainer to={'/contact'}>
                                <NavLink>
                                    Contact
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/sell'}>
                                <Button variant={'primary'} size={'sm'}>Become A seller</Button>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>

                </Container>
            </Navbar></header>)
}

export default Header