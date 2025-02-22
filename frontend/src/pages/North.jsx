import React, { useState } from "react";
import { Link } from "react-router-dom";
const recipesData = [
  {
    name: "Butter Chicken",
    description: "A rich and creamy tomato-based curry with tender chicken pieces.",
    image: "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/post_banners/a020994011721a0762cb3f33cfa17febdbc8562d8ea6d9038aa8ef0f3bd8383a.jpg"
  },
  {
    name: "Paneer Tikka",
    description: "Marinated and grilled paneer cubes served with chutney.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka-recipe.jpg"
  },
  {
    name: "Chole Bhature",
    description: "A popular dish of spicy chickpeas served with deep-fried bread.",
    image: "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/post_banners/5d33f0cbae61c053b8da447823f99ab24e50fd876494ba8665e250d7dcdc71b7.jpg"
  },
  {
    name: "Dal Makhani",
    description: "A creamy and buttery lentil dish made with black lentils and kidney beans.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/450px-Punjabi_style_Dal_Makhani.jpg"
  },
  {
    name: "Aloo Paratha",
    description: "A stuffed flatbread with spiced mashed potatoes, served with butter or yogurt.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/150px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg"
  }
];

export default function NorthIndianRecipes() {
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
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>North Indian Recipes</h1>
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
