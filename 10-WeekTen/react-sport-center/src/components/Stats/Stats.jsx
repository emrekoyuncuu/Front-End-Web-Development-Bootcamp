// components/Stats/Stats.jsx
import React from 'react';
import StatCard from './StatCard';
import { FaBook, FaDumbbell, FaClock, FaSmile } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    { number: 325, text: 'Course', icon: FaBook },
    { number: 405, text: 'Work Out', icon: FaDumbbell },
    { number: 305, text: 'Working Hour', icon: FaClock },
    { number: 705, text: 'Happy Client', icon: FaSmile },
  ];

  return (
    <section id="stats" className="section stats">
      <div className="container">
        {statsData.map((stat, index) => (
          <StatCard key={index} number={stat.number} text={stat.text} Icon={stat.icon} />
        ))}
      </div>
    </section>
  );
};

export default Stats;