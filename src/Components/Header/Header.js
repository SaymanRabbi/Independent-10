import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../../image/thetrack.png'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation();
 
    return (
        <div className='header'>
        <Navbar  className={
          pathname===('/')?'bg-transparent':'bg-dark'
             } expand="lg">
              <Container>
                    <Navbar.Brand >
                        
                       <Link to='/'> <img src={logo} className="w-50 img-fluid" alt="" /></Link>
    </Navbar.Brand>
    <Navbar.Toggle className='bg-dark' aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to='/' className='text-white fs-5'  >Home</Nav.Link>
        <Nav.Link as={Link} to='/login' className='text-white fs-5' >Login</Nav.Link>
        <Nav.Link as={Link} to='/register' className='text-white fs-5' >Register</Nav.Link>
        <Nav.Link as={Link} to='/blog' className='text-white fs-5' >Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;