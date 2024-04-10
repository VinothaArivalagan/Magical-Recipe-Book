// App.js
import data from './recipes.json'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DashboardPage from './pages/DashboardPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'; 
import { useState } from 'react';


function App() {
  const [recipes,  setRecipes] = useState(data);
  function handleNewRecipe (recipe) {

setRecipes(prevRecipes => [...prevRecipes, recipe])
  }

  const handleDelete = recipeId => {
    console.log(recipeId)
    const copy = JSON.parse(JSON.stringify(recipes))
    const filtered = copy.filter(recipe => recipe.id !== recipeId)
    setRecipes(filtered)
}
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <Navbar />
        
        <div className="content">
          <Routes>
            
            <Route exact path="/" element={<Home data={recipes} handleDelete={handleDelete} />} />
            <Route path="/about" element={<About/>} />
            <Route exact path="/dashboard" element={<DashboardPage handleNewRecipe={handleNewRecipe} data ={recipes}/>} />
            <Route path="/item/:recipeId" element={<ItemDetailsPage data = {recipes}/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
