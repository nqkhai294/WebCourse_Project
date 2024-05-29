import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import menuIcon from "../../assets/menu_toggler_icon.png"

const Header = () => {
  return (
    <div className='nav-header'>
    <Navbar expand='lg' bg='header'>
    <Navbar.Brand href="/" className='logo-course'>NextGenAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation">
          <Nav.Link href="/" className='navigation-home'>Home</Nav.Link>
          <Nav.Link href="/" className='navigation-about'>About course</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;