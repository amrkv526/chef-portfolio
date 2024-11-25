import React from 'react';
import ContactForm from '../components/contactForm';

function SignUp() {
  return (
    <div className="signup-container">
      <h1 className="label ABOUT">Sign Up</h1>
      <h2 className="label">Enter your details below:</h2>
      <ContactForm />
    </div>
  );
}

export default SignUp;
