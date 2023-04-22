import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import React , { Component } from 'react';
 

class Slide extends Component  {
  render(){
  return (
   
    <div className='contanier'>
      
    <center><h2>SOME OF OWER MEALS</h2></center>
    <div className='row row1'>
        <div className='col-lg-12 col-sm-12' >
        <Carousel variant="dark">
      <Carousel.Item>
        <img className='slide' src='./img/slide1.jpg'  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide' src='./img/slide2.jpg'  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slide'  src='./img/slide3.jpg'  alt="vaild"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
   </div>
   
  );
}
}
export default Slide;

