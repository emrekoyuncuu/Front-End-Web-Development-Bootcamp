// components/Navbar/MobileMenu.jsx
import React from 'react';

const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
    <a href="#home" onClick={onClose}>Home</a>
    <a href="#classes" onClick={onClose}>Classes</a>
    <a href="#trainers" onClick={onClose}>Trainers</a>
    <a href="#contact" onClick={onClose}>Contact</a>
    <button className="mobile-menu-JoinButton" onClick={onClose}>Join Us</button>
  </div>
);

export default MobileMenu;