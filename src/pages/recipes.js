import React from 'react';
import { Link } from 'react-router-dom';

function Recipes() {
  const recipes = {
    1: { 
      title: 'Spaghetti Carbonara', 
      image: 'https://via.placeholder.com/150', 
      tags: ['Italian', 'Dinner'], 
    },
    2: { 
      title: 'Vegetable Stir Fry', 
      image: 'https://via.placeholder.com/150', 
      tags: ['Vegetarian', 'Quick'], 
    },
    3: { 
      title: 'Chocolate Cake', 
      image: 'https://via.placeholder.com/150', 
      tags: ['Dessert', 'Sweet'], 
    },
  };

  return (
    <div className="recipes-grid">
      {Object.entries(recipes).map(([id, recipe]) => (
        <div key={id} className="recipe-card">
          <Link to={`/recipes/${id}`}>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h2 className="recipe-title">{recipe.title}</h2>
          </Link>
          <div className="recipe-tags">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="recipe-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
