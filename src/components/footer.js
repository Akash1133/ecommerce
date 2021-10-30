import React from 'react'
import './footerstyle.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'

function footer() {
    return (
        <div className="footer-style">
        <Container>
        <Row>
          <Col  className="footer-items"><h3 className="footer-heading">ABOUT US</h3>
          <ul className="list">
          <li>About us</li>
          <li>Store collection</li>
          <li>contact </li>
          <li>order tracking</li>
          </ul></Col>
          <Col  className="footer-items"><h3 className="footer-heading">USEFUL LINK</h3>
          <ul className="list">
          <li>Return</li>
          <li>Support policy</li>
          <li>FAQ's </li>
          <li>Size guide</li></ul>


          </Col>
          <Col   className="footer-items"><h3 className="footer-heading">FOLLOW US</h3>
          <ul className="list">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram </li>
          <li>Youtube</li></ul>
          
          </Col>
          <Col  className="footer-items"><h3 className="footer-heading">SUBSCRIBE</h3>
          <ul className="list">
          <li>Offers</li>
          <li>mail</li>
          <li>contact </li>
          <li>order tracking</li></ul>
          
          
          </Col>
        </Row>

        <Row>
              <Col className="last">
                 Developed By Akash 
              </Col>
        </Row>
      </Container>
        </div>
    )
}

export default footer
