import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipsList from './components/StarshipsList';
import StarshipDetail from './components/StarshipDetail';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<StarshipsList />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;