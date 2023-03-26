import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Carrousel.css';
import arrow from '../assets/arrow.png'


function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = pictures.length - 1;

  const handleNextSlide = () => {
    if (currentSlide === maxSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carrousel-container">
      <img
        className="carrousel-image"
        src={pictures[currentSlide]}
        alt="Slideshow"
      />
      {pictures.length > 1 && (
        <div className="carrousel-nav">
          <button onClick={handlePrevSlide}>
            <img src={arrow} alt="Previous slide" />
          </button>
          <button onClick={handleNextSlide}>
            <img src={arrow} alt="Next slide" />
          </button>
        </div>
      )}
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
