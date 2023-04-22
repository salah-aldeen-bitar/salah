import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import './style.css';
const Navbar1 = ()=>{
    return(
      <Navbar  expand="lg" style={{position:"fixed", zIndex:'10' }}>
      <Navbar.Brand href="#"><img src="./img/2.png" alt="valid"></img><p>resturant</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
navbarScroll
        >
          <Nav.Link herf="/"><Link className="nav-link nav-12" to="/">Home</Link></Nav.Link>
          <Nav.Link herf="/slide"><Link className="nav-link nav-12" to="/slide">Slide</Link></Nav.Link>
          <Nav.Link href="#action3">explore</Nav.Link>
          <Nav.Link href="#action4">review</Nav.Link>
          <Nav.Link href="#action5">faq</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    
    )
}
export default Navbar1;