import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './navstyle.css';

function BAR() {
    return (

      <Navbar bg="dark" variant='dark' expand={false} >
      <Container fluid className="nav-bar">
        <Navbar.Brand href="#">BrandName</Navbar.Brand>
       
           <div className="box1">
           
        <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
        <Nav.Link href="#action1" className="nav-link">Collection</Nav.Link>
        <Nav.Link href="#action1" className="nav-link">Products</Nav.Link>
        <Nav.Link href="#action1" className="nav-link">About us</Nav.Link>
        <Nav.Link href="#action1" className="nav-link">Services</Nav.Link>
           </div>
        
        <div className="box"> 
        <div className="toggle"><Navbar.Toggle aria-controls="offcanvasNavbar"  /></div>
        </div>


        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="offcanvas-link">Home</Nav.Link>
              <Nav.Link href="#action2" className="offcanvas-link">Link</Nav.Link>
              <Nav.Link href="#action2" className="offcanvas-link">Link</Nav.Link>
              <Nav.Link href="#action2" className="offcanvas-link">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default BAR
