import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../../image/thetrack.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const logout = () => {
    signOut(auth)

  }
 
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
              
        <NavLink   to='/' className={({isActive})=>isActive?"active-link":"link"}  >Home</NavLink>
        {user?<NavLink onClick={logout} to='/login' className={({isActive})=>isActive?"active-link":"link"} >Log-out</NavLink>:<NavLink to='/login' className={({isActive})=>isActive?"active-link":"link"} >Login</NavLink>}
                {user ? <small className='link'>{ user.displayName}</small>:<NavLink  to='/register' className={({isActive})=>isActive?"active-link":"link"} >Register</NavLink>}
        <NavLink  to='/blog' className={({isActive})=>isActive?"active-link":"link"} >Blog</NavLink>
        <NavLink  to='/about' className={({isActive})=>isActive?"active-link":"link"} >About</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;