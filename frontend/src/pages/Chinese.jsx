import React, { useState } from "react";

const recipesData = [
  {
    name: "Kung Pao Chicken",
    description: "A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers.",
    image: "https://allwaysdelicious.com/wp-content/uploads/2020/05/kung-pao-hero-1-2048x1365.jpg"
  },
  {
    name: "Fried Rice",
    description: "A popular dish made from cooked rice that has been stir-fried with vegetables, eggs, and soy sauce.",
    image: "https://www.seriouseats.com/thmb/BGV4Y7c0Kv2Ri-dmutNgCcble9w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-vegetable-fried-rice-recipe-hero-2-fed2a62b8bce4c51b945d9c24c2edb68.jpg"
  },
  {
    name: "Dumplings",
    description: "Chinese dumplings filled with minced meat or vegetables, often steamed or fried.",
    image: "https://assets.vogue.com/photos/58910f1169f0c3501f1dc525/master/w_1920,c_limit/00-holding-best-soup-dumplings-in-new-york.jpg"
  },
  {
    name: "Sweet and Sour Pork",
    description: "A dish featuring deep-fried pork pieces in a tangy sweet and sour sauce.",
    image: "https://tipbuzz.com/wp-content/uploads/Sweet-and-Sour-Pork-1.jpg"
  },
  {
    name: "Spring Rolls",
    description: "Crispy rolls filled with vegetables, meat, or seafood, often served with dipping sauces.",
    image: "https://bing.com/th?id=OSK.c2e15bf67ff2ad3bde0e49a4646e81ec"
  }
];

export default function ChineseRecipes() {
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
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Chinese Recipes</h1>
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
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
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
              <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{recipe.name}</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>{recipe.description}</p>
              <button onClick={()=>alert("it will be functional when we use the database")} style={{ padding: '8px', border: 'none', background: '#f08', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
