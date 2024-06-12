import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useState, useEffect } from 'react';
import LogoCourse from '../../assets/LogoCourse.png';

const Header = () => {

  return (
    <div className='nav-header'>
    <Navbar expand='lg' bg='header'>
    <Navbar.Brand href="/" className='logo-course'><img className='img-logo' src={LogoCourse} alt="logo" /> NextGenAI </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation">
          <NavLink to="/" className='navigation-home nav-link'>Home</NavLink>
          <NavLink to="/news" className='navigation-news nav-link'>News</NavLink>
          <NavLink to="/aboutcourse" className='navigation-about nav-link'>About Course</NavLink>
          <NavLink to="/register" className='navigation-register nav-link'>Join Course</NavLink>
    
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;