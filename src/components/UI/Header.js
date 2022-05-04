import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header({ onLogout }) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="text-light">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light">Todo</Nav.Link>
            <Nav.Link onClick={onLogout} className="text-light">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
