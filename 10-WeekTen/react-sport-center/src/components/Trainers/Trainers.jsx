// components/Trainers/Trainers.jsx
import React from 'react';
import TrainerCard from './TrainerCard';

const Trainers = () => {
  const trainersData = [
    {
      name: 'John Doe',
      specialty: 'Yoga Expert',
      image: '/trainer1.jpg',
      socials: ['facebook', 'twitter', 'instagram']
    },
    {
      name: 'Jane Smith',
      specialty: 'Fitness Expert',
      image: '/trainer2.jpg',
      socials: ['facebook', 'twitter', 'instagram']
    },
    {
      name: 'Mike Johnson',
      specialty: 'Cardio Trainer',
      image: '/trainer3.jpg',
      socials: ['facebook', 'twitter', 'instagram']
    }
  ];

  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <h2 className="section-title">OUR BEST TRAINERS</h2>
        <p>Meet our expert trainers who will guide you to achieve your fitness goals.</p>
        <div className="trainer-list">
          {trainersData.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;