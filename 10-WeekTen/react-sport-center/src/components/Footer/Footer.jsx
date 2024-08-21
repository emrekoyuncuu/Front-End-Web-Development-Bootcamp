// components/Footer/Footer.jsx
import React from "react";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <FooterInfo />
          <FooterLinks />
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Fitness Street, Gym City, 12345</p>
            <p>+1 (234) 567-8900</p>
            <p>info@powerfullsport.com</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebook/>
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter/>
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram/>
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Powerfull Sport Center. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
