// components/Reviews/Reviews.jsx
import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const reviewsData = [
    {
      name: 'Ellie Goulding',
      image: '/client1.jpg',
      rating: 5,
      comment: "The trainers here are amazing! I've seen significant improvements in my fitness level."
    },
    {
      name: 'John Doe',
      image: '/client2.jpg',
      rating: 4,
      comment: "Great facility with a wide range of classes. Highly recommend for anyone looking to get fit!"
    }
  ];

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section-title">CLIENT REVIEWS</h2>
        <p>See what our clients have to say about their experience with us.</p>
        <div className="review-list">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;