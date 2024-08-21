// components/Trainers/TrainerCard.jsx
import React from 'react';
import TrainerSocialIcons from './TrainerSocialIcons';

const TrainerCard = ({ name, specialty, image, socials }) => (
  <div className="trainer">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{specialty}</p>
    <TrainerSocialIcons socials={socials} />
  </div>
);

export default TrainerCard;