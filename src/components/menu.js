import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
import './menu.css'
import image1 from './static/image1.jpg'
import image2 from './static/image2.jpg'
import image3 from './static/image3.jpg'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function menu() {
    return (
        <div>
         <Container className="slider" fluid>
          <Row>
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="animated animatedfadeup fadeup text">Summer sale</div>
              <p>This diwali buy something New!</p>
             <Button  className="btn">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={image2}
              alt="Second slide"
            />
        
            <Carousel.Caption>
            <h1 className="animated animatedfadeup fadeup text">SUMMER SALE</h1>
              <p>This diwali buy something New!</p>
              <Button  className="btn">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={image3}
              alt="Third slide"
            />
        
            <Carousel.Caption>
            <h1 className="animated animatedfadeup fadeup text">SUMMER SALE</h1>
              <p>This diwali buy something New!</p>
          <Button  className="btn">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          </Row>
         </Container>
         </div>

    )
}

export default menu
