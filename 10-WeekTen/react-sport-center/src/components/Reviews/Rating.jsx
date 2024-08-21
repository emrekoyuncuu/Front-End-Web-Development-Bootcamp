// components/Reviews/Rating.jsx
import React from 'react';

const Rating = ({ rating }) => (
  <div className="rating">
    {[...Array(5)].map((star, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ))}
  </div>
);

export default Rating;