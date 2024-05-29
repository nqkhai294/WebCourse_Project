import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className='nav-header'>
    <Navbar expand='lg' bg='header'>
    <Navbar.Brand href="/" className='logo-course'>NextGenAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation">
          <Nav.Link href="/" className='navigation-home'>Home</Nav.Link>
          <Nav.Link href="/" className='navigation-news'>News</Nav.Link>
          <Nav.Link href="/" className='navigation-about'>About Course</Nav.Link>
          <Nav.Link href="/register" className='navigation-register'>Join Course</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;