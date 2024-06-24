import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css'; // Assuming you create a separate CSS file for additional styling

const NavBar = () => {
  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={brandStyle}>El Juguete Rabioso</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/toy">
              <Nav.Link style={linkStyle}>Lista de Juguetes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/toy/create">
              <Nav.Link style={linkStyle}>Crear Juguete</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link style={linkStyle}>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link style={linkStyle}>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navbarStyle = {
  background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
};

const brandStyle = {
  color: '#fff',
  fontWeight: 'bold',
};

const linkStyle = {
  color: '#fff',
  margin: '0 10px',
};

export default NavBar;