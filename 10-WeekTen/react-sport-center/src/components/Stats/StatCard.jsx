// components/Stats/StatCard.jsx
import React from 'react';
import StatItem from './StatItem';

const StatCard = ({ number, text, Icon }) => (
  <div className="stat-card">
    <StatItem number={number} text={text} Icon={Icon} />
  </div>
);

export default StatCard;