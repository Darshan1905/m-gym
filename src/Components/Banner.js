import React from "react";
import "../App.css";
import { Carousel } from 'react-bootstrap';

function Banner()  {
    return (
       
       <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:500  }}
      src={process.env.PUBLIC_URL + '/banner1.png'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:500  }}
      src={process.env.PUBLIC_URL + '/banner4.png'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      style={{ height:500 }}
      src={process.env.PUBLIC_URL + '/banner2.png'}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imageopacity"
      style={{ height:500 }}
      src={process.env.PUBLIC_URL + '/banner3.png'}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>

 
  </Carousel.Item>
</Carousel>

    )

  
}

export default Banner