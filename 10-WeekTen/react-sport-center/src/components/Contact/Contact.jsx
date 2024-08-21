// components/Contact/Contact.jsx
import React from 'react';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">CONTACT US</h2>
        <p>Get in touch with us for any inquiries or to start your fitness journey.</p>
        <div className="contact-content">
          <ContactForm />
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;