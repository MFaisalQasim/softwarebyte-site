import React from 'react'
import './App.css';
import FormsCard from "./components/FormsCardComponent/FormsCard";
// import styled from "styled-components";
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
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import CarouselComponents from './components/CarouselComponent/CarouselComponent';

// import SoftwareBYTElogo from "../images/companylogo";
// import SoftwareBYTElogo from "./companylogo";
import PostTitles from "./components/PostTitlesComponent/PostTitlesComponent";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import CardExampleContentBlock from './components/CardExampleContentBlock/CardExampleContentBlock';

function App() {
  return (
    <>
      {/* <img src='./company-logo.webp' alt="Logo" /> */}
      <NavbarComponent />

      {/* <HeaderComponent/> */}
      <CarouselComponents />

      {/* <FormsCard /> */}
      <PostTitles numberOfPosts="18" />
      {/* <CardExampleContentBlock/> */}
      <Row className='Card-div'>
        <Card className='CardCards' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../images/final-home--1st.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card className='CardCards' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../images/final-home--1st.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card className='CardCards' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../images/final-home--1st.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Row>

    </>
  );
}

export default App;
