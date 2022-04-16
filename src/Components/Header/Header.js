import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../../image/thetrack.png'

const Header = () => {
    return (
        <div className='header'>
             <Navbar variant='py-2 dark' className='text-white' expand="lg">
              <Container>
                    <Navbar.Brand href="#home">
                        
                        <img src={logo} className="w-50 img-fluid" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle className='bg-dark' aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className='text-white fs-5' href="#home">Home</Nav.Link>
        <Nav.Link className='text-white fs-5' href="#link">Services</Nav.Link>
        <Nav.Link className='text-white fs-5' href="#link">Packages</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;