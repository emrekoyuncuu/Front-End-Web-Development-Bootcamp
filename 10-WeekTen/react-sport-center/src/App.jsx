// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Classes from './components/Classes/Classes';
import BMICalculator from './components/BMICalculator/BMICalculator';
import Trainers from './components/Trainers/Trainers';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Classes />
      <BMICalculator />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// File structure
// src/
// ├── components/
// │   ├── Navbar/
// │   │   ├── Navbar.jsx
// │   │   ├── Logo.jsx
// │   │   └── NavMenu.jsx
// │   ├── Hero/
// │   │   ├── Hero.jsx
// │   │   ├── HeroContent.jsx
// │   │   └── HeroButtons.jsx
// │   ├── Stats/
// │   │   ├── Stats.jsx
// │   │   ├── StatCard.jsx
// │   │   └── StatItem.jsx
// │   ├── Classes/
// │   │   ├── Classes.jsx
// │   │   ├── ClassButtons.jsx
// │   │   └── ClassInfo.jsx
// │   ├── BMICalculator/
// │   │   ├── BMICalculator.jsx
// │   │   ├── BMIForm.jsx
// │   │   └── BMIResult.jsx
// │   ├── Trainers/
// │   │   ├── Trainers.jsx
// │   │   ├── TrainerCard.jsx
// │   │   └── TrainerSocialIcons.jsx
// │   ├── Products/
// │   │   ├── Products.jsx
// │   │   ├── ProductCard.jsx
// │   │   └── AddToCartButton.jsx
// │   ├── Reviews/
// │   │   ├── Reviews.jsx
// │   │   ├── ReviewCard.jsx
// │   │   └── Rating.jsx
// │   ├── Contact/
// │   │   ├── Contact.jsx
// │   │   ├── ContactForm.jsx
// │   │   └── Map.jsx
// │   └── Footer/
// │       ├── Footer.jsx
// │       ├── FooterInfo.jsx
// │       └── FooterLinks.jsx
// ├── styles/
// │   └── index.css
// └── App.jsx