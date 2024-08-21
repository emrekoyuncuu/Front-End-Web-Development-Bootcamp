// components/BMICalculator/BMIForm.jsx
import React, { useState, useEffect } from 'react';

const BMIForm = ({ onCalculate }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    onCalculate(height, weight);
  }, [height, weight, onCalculate]);

  return (
    <div className="bmi-form">
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (cm)"
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (kg)"
      />
    </div>
  );
};

export default BMIForm;