import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftsideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  return (
    <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='d-md-none border px-2 rounded bg-secondary'><Link className='text-white text-decoration-none' to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Link className='text-decoration-none text-dark fw-bold text-uppercase border px-2 rounded d-none d-md-block' href="/">Dragon News</Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className='d-flex gap-2 me-3 align-items-center'>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant='light' onClick={handleLogOut}>LogOut</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </div>
            <Link to='/profile'>
              {
                user?.photoURL ?
                  <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                  : <FaUser></FaUser>
              }
            </Link>

          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className='d-lg-none'>
            <RightSideNav></RightSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar >

  );
};

export default Header;