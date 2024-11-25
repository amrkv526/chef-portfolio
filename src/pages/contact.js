import React from 'react';
import ContactForm from '../components/contactForm';

function Contact() {
  return (
    <div>
      <h1>Say Hello!</h1>
      <div>
        <ContactForm includeMessage={true} />
      </div>
      <div>
        <img
          src="https://via.placeholder.com/400"
          alt="Contact Us"
        />
      </div>
    </div>
  );
}

export default Contact;
