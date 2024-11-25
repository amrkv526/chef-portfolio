import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const products = {
    1: {
      title: 'Leather Backpack',
      image: 'https://via.placeholder.com/150',
      tags: ['Accessories', 'Bags'],
    },
    2: {
      title: 'Wireless Headphones',
      image: 'https://via.placeholder.com/150',
      tags: ['Electronics', 'Audio'],
    },
    3: {
      title: 'Espresso Machine',
      image: 'https://via.placeholder.com/150',
      tags: ['Kitchen', 'Coffee'],
    },
  };

  return (
    <div className="shop-grid">
      {Object.entries(products).map(([id, product]) => (
        <div key={id} className="product-card">
          <Link to={`/shop/${id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
          </Link>
          <div className="product-tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="product-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
