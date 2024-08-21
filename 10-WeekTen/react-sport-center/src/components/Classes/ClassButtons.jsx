// components/Classes/ClassButtons.js
import React from 'react';

const ClassButtons = ({ activeClass, onClassChange }) => {
  const classes = ['yoga', 'group', 'solo', 'stretching'];

  return (
    <div className="class-buttons">
      {classes.map((classType) => (
        <button
          key={classType}
          className={`class-button ${activeClass === classType ? 'active' : ''}`}
          onClick={() => onClassChange(classType)}
        >
          {classType.charAt(0).toUpperCase() + classType.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ClassButtons;