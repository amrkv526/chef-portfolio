import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        
        <div className="header-links left-links">
          <a href="/about">About</a>
          <a href="/recipes">Recipes</a>
          <a href="/blog">Blog</a>
        </div>
        
        <h1 className="header-title">Chef Dionne Reid</h1>
        
        <div className="header-links right-links">
          <a href="/events">Events</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
          <img src="/images/shopping-cart.png" alt="Shopping cart" className="shopping-cart" />
          <Link to="/signup">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
