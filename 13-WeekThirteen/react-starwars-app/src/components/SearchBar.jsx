import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center border-b-2 border-yellow-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search starships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-sm border-4 text-black py-1 px-2 rounded transition duration-300"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;