import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe({ recipe: propRecipe }) {
  const { id } = useParams();

  const recipes = {
    1: {
      title: 'Spaghetti Carbonara',
      image: '/images/pepperSteak.jpeg',
      tags: ['Italian', 'Dinner'],
      intro: 'A classic Italian pasta dish with creamy sauce and crispy pancetta.',
      ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'],
      steps: 'Boil pasta, mix with other ingredients.',
      servings: 4,
    },
    2: {
      title: 'Vegetable Stir Fry',
      image: 'https://via.placeholder.com/150',
      tags: ['Vegetarian', 'Quick'],
      intro: 'A quick and healthy stir-fry packed with fresh vegetables.',
      ingredients: ['Broccoli', 'Carrots', 'Soy Sauce', 'Tofu'],
      steps: 'Stir fry vegetables and tofu in soy sauce.',
      servings: 2,
    },
    3: {
      title: 'Chocolate Cake',
      image: 'https://via.placeholder.com/150',
      tags: ['Dessert', 'Sweet'],
      intro: 'A rich and moist chocolate cake for any occasion.',
      ingredients: ['Flour', 'Cocoa', 'Sugar', 'Eggs', 'Butter'],
      steps: 'Mix ingredients, bake at 350°F for 30 mins.',
      servings: 8,
    },
  };

  const recipe = propRecipe || recipes[Number(id)];

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <span key={index} className="recipe-tag">{tag}</span>
        ))}
      </div>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <div className="recipe-intro">{recipe.intro}</div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="recipe-directions">
        <h2>Directions</h2>
        <p>{recipe.steps}</p>
        <div className="recipe-extra">
          <span>Servings: {recipe.servings}</span>
          <button className="print-button">Print Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
