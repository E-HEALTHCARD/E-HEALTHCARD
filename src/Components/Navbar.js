import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importing user icon
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Brand Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
        <Nav className="ml-auto"> {/* Use ml-auto to push items to the right */}
          <NavDropdown title={<><FontAwesomeIcon icon={faUser} /> Account</>} id="account-nav-dropdown">
            <NavDropdown title="Login" id="login-nav-dropdown">
              <NavDropdown.Item href="/login/patient">Patient</NavDropdown.Item>
              <NavDropdown.Item href="/login/doctor">Doctor</NavDropdown.Item>
              <NavDropdown.Item href="/login/pharmacist">Pharmacist</NavDropdown.Item>
              <NavDropdown.Item href="/login/pathologist">Pathologist</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sign Up" id="signup-nav-dropdown">
              <NavDropdown.Item href="/signup/patient">Patient</NavDropdown.Item>
              <NavDropdown.Item href="/signup/doctor">Doctor</NavDropdown.Item>
              <NavDropdown.Item href="/signup/pharmacist">Pharmacist</NavDropdown.Item>
              <NavDropdown.Item href="/signup/pathologist">Pathologist</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
