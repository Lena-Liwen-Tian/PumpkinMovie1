import React, { useState, useEffect } from "react";
import './welcom.css';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel=() =>{
    const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel className="welcome" activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item className="wel">
        <img
          className="d-block w-100"
          src="https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg"
          alt="First slide"
        /> 
        <Carousel.Caption>
      <h3 className="cap">Welcome to Pumpkin Movies</h3>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="wel">
        <img
          className="d-block w-100"
          src="https://img.wallpapersafari.com/desktop/1920/1080/58/45/45r6Dp.jpg"
          alt="Second slide"
        />
         <Carousel.Caption>
      <h3 className="cap">Welcome to Pumpkin Movies</h3>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="wel">
        <img
          className="d-block w-100"
          src="https://paperpull.com/wp-content/uploads/2018/09/lilo-and-stitch-the-animated-movie-wallpaper.jpg"
          alt="Third slide"
        />
         <Carousel.Caption>
      <h3 className="cap1">Welcome to Pumpkin Movies</h3>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;