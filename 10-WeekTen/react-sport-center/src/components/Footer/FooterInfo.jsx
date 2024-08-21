// components/Footer/FooterInfo.jsx
import React from 'react';
import logo from '/logo.png';

const FooterInfo = () => {
  return (
    <div className="footer-info">
      <img src={logo} alt="Powerfull Logo" className="footer-logo" />
      <p>Empowering you to achieve your fitness goals with expert guidance and state-of-the-art facilities.</p>
    </div>
  );
};

export default FooterInfo;