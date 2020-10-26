import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav' 

import "./mynavbar.style.css";

const MyNavbar = () => {
    return (
      <div>
        <Navbar
          fixed="top"
          variant="dark"
          expand="md"
          className="animate-navbar nav-theme justify-content-between"
        >
          <div>
            <Navbar.Brand href="#home">
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  };
  
  export default MyNavbar;