import React from 'react';
import ContactForm from '../components/contactForm';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Say Hello!</h1>
      <div className="contact-content">
        <div className="contact-form-container">
          <ContactForm includeMessage={true} />
        </div>
        <div className="contact-image-container">
          <img
            src="https://via.placeholder.com/400"
            alt="Contact Us"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
