import React from 'react';
import { Link } from 'react-router-dom';

function Recipes() {
  // Mock data for recipes
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Vegetable Stir Fry', description: 'A healthy, quick stir fry.' },
    { id: 3, title: 'Chocolate Cake', description: 'Rich and moist chocolate cake.' },
  ];

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
