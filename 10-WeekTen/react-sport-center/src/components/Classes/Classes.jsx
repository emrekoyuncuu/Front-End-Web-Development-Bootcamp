// components/Classes/Classes.js
import React, { useState } from 'react';
import ClassButtons from './ClassButtons';
import ClassInfo from './ClassInfo';

const Classes = () => {
  const [activeClass, setActiveClass] = useState('yoga');

  const handleClassChange = (classType) => {
    setActiveClass(classType);
  };

  return (
    <section id="classes" className="section classes">
      <div className="container">
        <h2 className="section-title">OUR CLASSES</h2>
        <p>Discover a wide range of fitness classes tailored to your needs and goals.</p>
        <ClassButtons activeClass={activeClass} onClassChange={handleClassChange} />
        <ClassInfo activeClass={activeClass} />
      </div>
    </section>
  );
};

export default Classes;