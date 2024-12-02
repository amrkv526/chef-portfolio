import React from 'react';
import { Link } from 'react-router-dom';

function Recipes() {
  const recipes = {
    1: { 
      title: 'Jamaican Pepper Steak', 
      image: '/images/pepperSteak.jpeg', 
      tags: ['Jamaican', 'Dinner'], 
    },
    2: { 
      title: 'Jamaican Grilled Stuffed Red Snapper', 
      image: '/images/snapper.jpeg', 
      tags: ['Pescatarian', 'Jamaican'], 
    },
    3: { 
      title: 'Jamaican Stew Peas with Spinners', 
      image: '/images/peaStew.webp', 
      tags: ['Jamaican', 'Vegetarian'], 
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
