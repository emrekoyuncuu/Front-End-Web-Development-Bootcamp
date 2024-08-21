// components/Hero/Hero.js
import React from 'react';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';
import heroImage from '/hero-man.jpg';

const Hero = () => (
  <section id="home" className="section hero">
    <img src={heroImage} alt="Hero Background" className="hero-bg" />
    <div className="container">
      <HeroContent />
      <HeroButtons />
    </div>
  </section>
);

export default Hero;