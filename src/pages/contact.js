import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Say Hello!</h1>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
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
