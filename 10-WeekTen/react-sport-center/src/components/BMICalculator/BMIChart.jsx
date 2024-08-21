// components/BMICalculator/BMIChart.jsx
import React from 'react';

const BMIChart = ({ bmi }) => {
  const getIndicatorPosition = (bmi) => {
    if (!bmi) return 0;
    if (bmi < 18.5) return (bmi / 18.5) * 20;
    if (bmi < 25) return 20 + ((bmi - 18.5) / 6.5) * 20;
    if (bmi < 30) return 40 + ((bmi - 25) / 5) * 20;
    if (bmi < 35) return 60 + ((bmi - 30) / 5) * 20;
    return 80 + Math.min((bmi - 35) / 5 * 20, 20);
  };

  const indicatorPosition = getIndicatorPosition(bmi);

  return (
    <div className="bmi-chart">
      <img src="/bmi-index.jpg" alt="BMI Chart" className="bmi-chart-img" />
      <div 
        className="bmi-indicator" 
        style={{ left: `${indicatorPosition}%` }}
      ></div>
    </div>
  );
};

export default BMIChart;