import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function SubmitRecipe() {
  const [recipe, setRecipe] = useState({ name: "", description: "", ingredients: "", steps: "", image: "" });
  const [submitted, setSubmitted] = useState(false);
  //const Navigate=useNavigate();  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.history.back()
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff5e6', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5733', marginBottom: '16px' }}>🔥 Submit Your Mouthwatering Recipe 🔥</h1>
      {submitted ? (
        <div style={{ padding: '16px', background: '#e0ffe0', borderRadius: '8px', fontSize: '18px' }}>
          <h2 style={{ color: '#28a745' }}>Thank you for your submission! 🍽️</h2>
          <p>Your delicious creation has been recorded.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="text"
            placeholder="✨ Recipe Name ✨"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ff5733', fontSize: '16px' }}
          />
          <textarea
            placeholder="🍲 Short Description"
            value={recipe.description}
            onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ff5733', fontSize: '16px' }}
          />
          <textarea
            placeholder="🥑 Ingredients (comma separated)"
            value={recipe.ingredients}
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ff5733', fontSize: '16px' }}
          />
          <textarea
            placeholder="📜 Steps (numbered)"
            value={recipe.steps}
            onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ff5733', fontSize: '16px' }}
          />
          <input
            type="text"
            placeholder="📸 Image URL (optional)"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ff5733', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '12px', background: '#ff5733', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', transition: '0.3s' }}>
            🍽️ Submit Your Recipe
          </button>
        </form>
      )}
    </div>
  );
}
