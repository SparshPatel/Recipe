import React, { useState } from "react";

const recipesData = [
  {
    name: "Dosa",
    description: "A crispy and savory South Indian pancake made from fermented rice and lentil batter.",
    image: "https://www.chefspencil.com/wp-content/uploads/Dosa-1.jpg.webp"
  },
  {
    name: "Idli",
    description: "Steamed rice cakes made from a fermented batter of rice and urad dal.",
    image: "https://www.chefspencil.com/wp-content/uploads/Idli.jpg.webp"
  },
  {
    name: "Sambar",
    description: "A flavorful lentil-based stew cooked with tamarind and vegetables.",
    image: "https://cdn.tarladalal.com/members/9306/big/big_sambar_recipe,_south_indian_homemade_sambar_recipe-14343.jpg?size=696X905"
  },
  {
    name: "Vada",
    description: "A deep-fried savory snack made from urad dal or lentils.",
    image: "https://www.chefspencil.com/wp-content/uploads/Vada.jpg.webp"
  },
  {
    name: "Pongal",
    description: "A comfort dish made with rice, lentils, ghee, and black pepper.",
    image: "https://www.chefspencil.com/wp-content/uploads/Pongal.jpg.webp"
  }
];

export default function SouthIndianRecipes() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState(recipesData);
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", image: "" });
  const [showForm, setShowForm] = useState(false);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  const addRecipe = () => {
    if (newRecipe.name && newRecipe.description && newRecipe.image) {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({ name: "", description: "", image: "" });
      setShowForm(false);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>South Indian Recipes</h1>
      <input 
        type="text"
        placeholder="Search for a recipe..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
      />
      <button 
        onClick={() => setShowForm(true)} 
        style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '16px' }}
      >
        Add New Recipe
      </button>
      {showForm && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px', cursor: 'pointer' }} onClick={() => setShowForm(false)}>
            X
            </div>
          <input 
            type="text" 
            placeholder="Recipe Name" 
            value={newRecipe.name} 
            onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} 
            style={{ marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={newRecipe.description} 
            onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })} 
            style={{ marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <input 
            type="text" 
            placeholder="Image URL" 
            value={newRecipe.image} 
            onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value })} 
            style={{ marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <button 
            onClick={addRecipe} 
            style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
          >
            Save Recipe
          </button>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {filteredRecipes.map((recipe, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            
            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', marginTop: '8px' }}>{recipe.name}</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>{recipe.description}</p>
              <button onClick={()=>alert("it will be functional when we use the database")} style={{ padding: '8px', border: 'none', background: '#f08', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
