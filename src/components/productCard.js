import React from 'react';
import { useParams } from 'react-router-dom';

function Product({ product: propProduct }) {
  const { id } = useParams();

  const products = {
    1: {
      title: 'Leather Backpack',
      image: 'https://via.placeholder.com/150',
      tags: ['Accessories', 'Bags'],
      description: 'A premium leather backpack perfect for work and travel.',
      price: '$199',
    },
    2: {
      title: 'Wireless Headphones',
      image: 'https://via.placeholder.com/150',
      tags: ['Electronics', 'Audio'],
      description: 'High-quality wireless headphones with noise cancellation.',
      price: '$299',
    },
    3: {
      title: 'Espresso Machine',
      image: 'https://via.placeholder.com/150',
      tags: ['Kitchen', 'Coffee'],
      description: 'Compact espresso machine for perfect coffee every morning.',
      price: '$499',
    },
  };

  const product = propProduct || products[id];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      {product.image && <img src={product.image} alt={product.title} />}
      <div>
        {product.tags && product.tags.map((tag, index) => (
          <span key={index} className="product-tag">{tag}</span>
        ))}
      </div>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
    </div>
  );
}

export default Product;
