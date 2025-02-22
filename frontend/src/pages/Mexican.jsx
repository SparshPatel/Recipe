import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const recipesData = [
  {
    name: "Tacos",
    description: "Traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
    image: "https://www.chefspencil.com/wp-content/uploads/Tacos-960x960.jpg.webp"
  },
  {
    name: "Guacamole",
    description: "A creamy avocado-based dip, often mixed with tomatoes, onions, and lime juice.",
    image: "https://www.simplyrecipes.com/thmb/f0MLqxRI9Sv62wG3JO5MKoh1L-w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Guacamole-LEAD-6-2-64cfcca253c8421dad4e3fad830219f6.jpg"
  },
  {
    name: "Chiles Rellenos",
    description: "A dish of roasted green chiles stuffed with cheese or meat and covered in egg batter and sauce.",
    image: "https://www.chilipeppermadness.com/wp-content/uploads/2024/09/Chiles-Rellenos-Recipe-PLATED1.jpg"
  },
  {
    name: "Enchiladas",
    description: "Corn tortillas rolled around a filling and covered with a savory sauce.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Enchilada_Rice_Beans.jpg/375px-Enchilada_Rice_Beans.jpg"
  },
  {
    name: "Tamales",
    description: "A traditional dish made of masa (corn dough) filled with meats, cheese, or other fillings and steamed in corn husks.",
    image: "https://svdpkofc.org/wp-content/uploads/2022/10/holiday-tamales-sale-1320x880.jpeg"
  }
];

export default function MexicanRecipes() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState(recipesData);
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", image: "" });
  const [showForm, setShowForm] = useState(false);
  const Navigate=useNavigate();

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
  const write =()=>{
    Navigate('/show');

  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Mexican Recipes</h1>
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
