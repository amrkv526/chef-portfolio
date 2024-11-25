import React from 'react';

function ContactForm({ includeMessage }) {
  return (
    <form className="signup-form">
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="container small-container"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="container small-container"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          className="container"
          placeholder="Enter your email"
          required
        />
      </div>
      {includeMessage && (
        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
      )}
      <button type="submit" className="button">
        <span className="subscribe">{includeMessage ? 'Submit' : 'Sign Up'}</span>
      </button>
    </form>
  );
}

export default ContactForm;
