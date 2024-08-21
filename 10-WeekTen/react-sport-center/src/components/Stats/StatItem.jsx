// components/Stats/StatItem.jsx
import React from 'react';

const StatItem = ({ number, text, Icon }) => (
  <div className="stat-item">
    <Icon className="stat-icon" />
    <h2>{number}</h2>
    <p>{text}</p>
  </div>
);

export default StatItem;