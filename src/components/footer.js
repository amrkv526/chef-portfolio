import React from 'react';
import '../app.css';

function Footer() {
  return (
    <footer className="footer-container">

      <h2 className="footer-title">Dionne Reid</h2>
      
      <div className="footer-content">

      <div className="footer-links">
        <div className="footer-link-group">
          <a href="/about">About</a>
          <a href="/recipes">Recipes</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="footer-link-group">
          <a href="/events">Events</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
        
        <div className="newsletter-section">
          <p className="newsletter-title">a newsletter</p>
          <p className="newsletter-description">
            recipes, stories, and unsolicited advice
            <br />
            from Dionne Reid
          </p>
          <div className="newsletter-signup">
            <input
              type="email"
              placeholder="Type your email"
              className="email-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>


      <div className="social-icons">
        <img src="/images/youtube.png" alt="YouTube" className="social-icon" />
        <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
        <img src="/images/twitter.png" alt="Twitter" className="social-icon" />
      </div>

   
      <div className="footer-credits">
        <p>Site Credits</p>
      </div>
    </footer>
  );
}

export default Footer;
