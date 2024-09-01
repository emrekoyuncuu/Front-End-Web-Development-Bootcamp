import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { fetchStarshipDetail } from '../api/api';

const StarshipDetail = () => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadStarshipDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchStarshipDetail(id);
        setStarship(data);
      } catch (error) {
        console.error('Error fetching starship detail:', error);
      }
      setLoading(false);
    };

    loadStarshipDetail();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!starship) return <div>Starship not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <Link to="/" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block transition duration-300">&larr; Back to list</Link>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 scale-in">
        <div className="mb-6">
          <img 
            src="/starships.jpg"
            alt="Star Wars Starship" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">{starship.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p><strong>Cost in credits:</strong> {starship.cost_in_credits}</p>
            <p><strong>Length:</strong> {starship.length}</p>
          </div>
          <div>
            <p><strong>Max atmosphering speed:</strong> {starship.max_atmosphering_speed}</p>
            <p><strong>Crew:</strong> {starship.crew}</p>
            <p><strong>Passengers:</strong> {starship.passengers}</p>
            <p><strong>Cargo capacity:</strong> {starship.cargo_capacity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail;