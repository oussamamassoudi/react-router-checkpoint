import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarr({settext, setrate}) {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" style={{backgroundColor : "#000", color:'white' }}>
    <Container fluid>
      <Navbar.Brand href="#"><span style={{color:"red"}}>Home Cinema</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><Link to="/" style={{textDecoration:"none", color:"white"}}>Movies</Link></Nav.Link>
          <Nav.Link href="#action2"><Link to="/about"  style={{textDecoration:"none", color:"white"}}>About Us</Link></Nav.Link>
          <Nav.Link href="#action2"><Link to="/contact"  style={{textDecoration:"none", color:"white"}}>Contact Us</Link></Nav.Link>
          <div className='s-rating'>
          <ReactStars 
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={true}
    onChange={(newRating)=>setrate(newRating)}
   
  />
  </div>
         
         
            
        </Nav>
        <Form className="d-flex" >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>settext(e.target.value)}
          />
          <Button variant="outline-success" style={{backgroundColor:"red", color:"white", border:"none"}}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr