import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SouthIndianRecipes from "./pages/South";
import NorthIndianRecipes from "./pages/North";
import ChineseRecipes from "./pages/Chinese";
import MexicanRecipes from "./pages/Mexican";
import SubmitRecipe from "./pages/receipe";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/south" element={<SouthIndianRecipes />} />
        <Route path="/north" element={<NorthIndianRecipes />} />
        <Route path="/chinese" element={<ChineseRecipes />} />
        <Route path="/mexican" element={<MexicanRecipes />} />
        
        <Route path="/show" element={<SubmitRecipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
