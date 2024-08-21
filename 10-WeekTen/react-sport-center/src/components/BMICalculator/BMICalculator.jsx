// components/BMICalculator/BMICalculator.jsx
import React, { useState, useEffect } from 'react';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';
import BMIChart from './BMIChart';

const BMICalculator = () => {
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (height, weight) => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <section id="bmi-calculator" className="bmi-calculator">
      <div className="container">
        <h2 className="section-title">BMI Calculator</h2>
        <p>Calculate your Body Mass Index to get an idea of your fitness level.</p>
        <div className="bmi-content">
          <BMIForm onCalculate={calculateBMI} />
          <BMIChart bmi={bmi} />
        </div>
        <BMIResult bmi={bmi} />
      </div>
    </section>
  );
};

export default BMICalculator;