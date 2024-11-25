import React from 'react';

function SignUp() {
  return (
    <div className="signup-container">
    <h1 className="label ABOUT">Sign Up</h1>
      <h2 className="label">Enter your details below:</h2>
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
        <button type="submit" className="button">
          <span className="subscribe">Sign Up</span>
        </button>
      </form>
    </div>
  );
}

export default SignUp;
