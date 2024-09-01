import React from 'react';
import { Link } from 'react-router-dom';

const StarshipCard = ({ starship }) => {
  const id = starship.url.split('/').filter(Boolean).pop();

  return (
    <Link to={`/starship/${id}`} className="block">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden starship-card fade-in">
        <div className="relative h-48">
          <img 
            src="/starships.jpg" 
            alt="Star Wars Starship" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">{starship.name}</h2>
          <p className="text-gray-300 mb-2">Model: {starship.model}</p>
          <p className="text-gray-300">Speed: {starship.max_atmosphering_speed}</p>
        </div>
      </div>
    </Link>
  );
};

export default StarshipCard;