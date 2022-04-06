import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import {
  Container,
  Nav,
  NavDropdown,
  Carousel,
  Card,
  Button,
  Col,
  Row
} from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src='../images/companylogo.png' width={'100px'} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className="me-end">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing">FEATURES</Nav.Link>
              <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">RESUME</Nav.Link>
              <Nav.Link href="#features">CLIENTS</Nav.Link>
              <Nav.Link href="#pricing">PRICING</Nav.Link>
              <Nav.Link href="#deets">BLOG</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">CONTACT</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">About Development</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
