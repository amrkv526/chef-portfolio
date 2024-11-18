import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const { id } = useParams(); 


  const recipes = {
    1: { title: 'Spaghetti Carbonara', ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'], steps: 'Boil pasta, mix with other ingredients.' },
    2: { title: 'Vegetable Stir Fry', ingredients: ['Broccoli', 'Carrots', 'Soy Sauce', 'Tofu'], steps: 'Stir fry vegetables and tofu in soy sauce.' },
    3: { title: 'Chocolate Cake', ingredients: ['Flour', 'Cocoa', 'Sugar', 'Eggs', 'Butter'], steps: 'Mix ingredients, bake at 350°F for 30 mins.' },
  };

  const recipe = recipes[id]; 

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
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
