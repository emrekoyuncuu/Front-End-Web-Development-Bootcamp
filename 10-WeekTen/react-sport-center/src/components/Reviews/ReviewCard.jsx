// components/Reviews/ReviewCard.jsx
import React from 'react';
import Rating from './Rating';

const ReviewCard = ({ name, image, rating, comment }) => (
  <div className="review">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <Rating rating={rating} />
    <p>"{comment}"</p>
  </div>
);

export default ReviewCard;