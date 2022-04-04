import React from 'react'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
// import styled from "styled-components";
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
import 'bootstrap/dist/css/bootstrap.css'
// import SoftwareBYTElogo from "../images/companylogo";
// import SoftwareBYTElogo from "./companylogo";

function App() {
  return (
    <>
      {/* <img src='./company-logo.webp' alt="Logo" /> */}
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

      <Carousel>
        <Carousel.Item className='carousel-item' interval={1000}>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--1st.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        </Carousel.Item>
        <Carousel.Item className='carousel-item' interval={500}>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--2nd.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--3rd.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
