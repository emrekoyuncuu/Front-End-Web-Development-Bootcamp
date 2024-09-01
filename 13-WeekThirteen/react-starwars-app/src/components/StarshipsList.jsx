import React, { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import { fetchStarships } from '../api/api';

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadStarships('https://swapi.dev/api/starships/');
  }, []);

  const loadStarships = async (url) => {
    setLoading(true);
    try {
      const data = await fetchStarships(url);
      setStarships(prevStarships => [...prevStarships, ...data.results]);
      setNextPage(data.next);
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
    setLoading(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setStarships([]);
    loadStarships(`https://swapi.dev/api/starships/?search=${term}`);
  };

  const loadMore = () => {
    if (nextPage) {
      loadStarships(nextPage);
    }
  };

  const filteredStarships = starships.filter(
    ship => ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">Star Wars Starships</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredStarships.map((ship, index) => (
          <StarshipCard key={index} starship={ship} />
        ))}
      </div>
      {nextPage && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-300 scale-in"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default StarshipsList;