// components/BMICalculator/BMIResult.jsx
import React from 'react';

const BMIResult = ({ bmi }) => {
  if (!bmi) return null;

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    if (bmi < 35) return 'Obese';
    return 'Extremely Obese';
  };

  const category = getBMICategory(bmi);

  return (
    <div className="bmi-result">
      Your BMI is {bmi.toFixed(1)} - {category}
    </div>
  );
};

export default BMIResult;