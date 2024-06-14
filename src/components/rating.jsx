import React from 'react';
import '../sass/components/rating.css';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
