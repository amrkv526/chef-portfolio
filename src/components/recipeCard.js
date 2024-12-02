import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe({ recipe: propRecipe }) {
  const { id } = useParams();

  const recipes = {
    1: {
      title: 'Spaghetti Carbonara',
      image: '/images/pepperSteak.jpeg',
      tags: ['Italian', 'Dinner'],
      ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'],
      steps: 'Boil pasta, mix with other ingredients.',
    },
    2: {
      title: 'Vegetable Stir Fry',
      image: 'https://via.placeholder.com/150',
      tags: ['Vegetarian', 'Quick'],
      ingredients: ['Broccoli', 'Carrots', 'Soy Sauce', 'Tofu'],
      steps: 'Stir fry vegetables and tofu in soy sauce.',
    },
    3: {
      title: 'Chocolate Cake',
      image: 'https://via.placeholder.com/150',
      tags: ['Dessert', 'Sweet'],
      ingredients: ['Flour', 'Cocoa', 'Sugar', 'Eggs', 'Butter'],
      steps: 'Mix ingredients, bake at 350°F for 30 mins.',
    },
  };

  const recipe = propRecipe || recipes[id]; 

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      <div>
        {recipe.tags && recipe.tags.map((tag, index) => (
          <span key={index} className="recipe-tag">{tag}</span>
        ))}
      </div>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <p>{recipe.steps}</p>
    </div>
  );
}

export default Recipe;
