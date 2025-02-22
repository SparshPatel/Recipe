import React, { useState } from "react";

export default function RecipePage() {
  const [recipes, setRecipes] = useState([
    {
      name: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ingredients: "Spaghetti, Eggs, Parmesan Cheese, Pancetta, Black Pepper",
      steps: "1. Cook pasta. 2. Cook pancetta. 3. Mix eggs and cheese. 4. Combine everything.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Spaghetti_alla_Carbonara.jpg"
    },
    {
      name: "Chocolate Brownies",
      description: "Delicious, fudgy brownies made with dark chocolate and cocoa powder.",
      ingredients: "Butter, Sugar, Eggs, Cocoa Powder, Dark Chocolate, Flour",
      steps: "1. Melt butter and chocolate. 2. Mix with sugar and eggs. 3. Add flour. 4. Bake.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Chocolate_Brownie.png"
    }
  ]);

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff5e6', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff5733', marginBottom: '16px', textAlign: 'center' }}>🍽️ Delicious Recipes 🍽️</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {recipes.map((recipe, index) => (
          <div key={index} style={{ background: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginTop: '12px' }}>{recipe.name}</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>{recipe.description}</p>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff5733' }}>Ingredients</h3>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>{recipe.ingredients}</p>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff5733' }}>Steps</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>{recipe.steps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
