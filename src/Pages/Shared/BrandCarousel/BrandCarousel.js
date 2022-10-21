import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/255392/pexels-photo-255392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/12874388/pexels-photo-12874388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />


        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel; 