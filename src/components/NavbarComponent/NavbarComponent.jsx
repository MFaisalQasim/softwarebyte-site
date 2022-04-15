import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import "./NavbarComponent.css";

export default function NavbarComponent() {

  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div class="page-wrapper">
        <div class="nav-wrapper">
          <nav class="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" />
            <button onClick={showSidebar}class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              </button>
            <ul className={sidebar ? 'navbar-ul:active': 'navbar-ul'} 
            // class="nav no-search"
            >
            {/* <ul class="nav no-search"> */}
              <li class="nav-item"><a href="#">Home</a></li>
              <li class="nav-item"><a href="#">About</a></li>
              <li class="nav-item"><a href="#">Work</a></li>
              <li class="nav-item"><a href="#">Careers</a></li>
              <li class="nav-item"><a href="#">Contact Us</a></li>
              <i class="fas fa-search" id="search-icon"></i>
              <input class="search-input" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
        {/* <section class="headline">
          <h1>Responsive Navigation</h1>
          <p>Using CSS grid and flexbox to easily build navbars!</p>
        </section> */}
      </div>
    </>
  )
}
