import React from 'react'
import './App.css';
// import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css'
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import CarouselComponents from './components/CarouselComponent/CarouselComponent';

// import SoftwareBYTElogo from "../images/companylogo";
// import SoftwareBYTElogo from "./companylogo";
import ProfileCard from './components/ProfileCards/ProfileCard';
import SmallCards from './components/SmallCards/SmallCards';
import OurClient from './components/OurClient/OurClient';
import AdvanceCards from './components/AdvanceCards/AdvanceCards';
import OurServices from './components/OurServices/OurServices';

function App() {
  return (
    <>
      {/* <img src='./company-logo.webp' alt="Logo" /> */}
      <NavbarComponent/>
      <ProfileCard/>
      {/* <OurClient/> */}
      <AdvanceCards/>
      <CarouselComponents/>
      <OurServices/>
    </>
  );
}
export default App;
