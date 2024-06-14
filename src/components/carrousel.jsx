import React, { useState } from 'react';
import '../sass/components/carrousel.css';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrousel">
      <img src={pictures[currentIndex]} alt="Logement" className="carrousel__image" />
      <button className="carrousel__button carrousel__button--prev" onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carrousel__button carrousel__button--next" onClick={handleNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carrousel;
