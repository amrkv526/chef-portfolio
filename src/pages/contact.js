import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Say Hello!</h1>
      <div className="contact-content">
        <div className="contact-text-container">
          <p>Business inquiries</p>
          <p><a href="mailto:business@example.com">business@example.com</a></p>
        </div>
        <div className="contact-image-container">
          <img
            src="/images/prawns.jpg"
            alt="Contact Us"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
