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

  const categories = [
    ['Vegetarian', 'Vegan'],
    ['Jamaican', 'Pescatarian'],
  ];

  return (
    <div className="recipes-container">
      {/* Top Section */}
      <div className="top-section">
        <h1 className="recipes-title">Recipes</h1>
        <div className="categories-container">
          {categories.map((column, columnIndex) => (
            <div key={columnIndex} className="category-column">
              {column.map((category, categoryIndex) => (
                <div key={categoryIndex} className="category-item">
                  {category}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search recipes..."
        />
      </div>

      {/* Recipe Grid */}
      <div className="recipes-grid">
        {Object.entries(recipes).map(([id, recipe]) => (
          <div key={id} className="recipe-card">
            <Link to={`/recipes/${id}`} className="recipe-link">
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
    </div>
  );
}

export default Recipes;
