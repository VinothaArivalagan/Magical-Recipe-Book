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
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route exact path="/dashboard" element={<DashboardPage data ={recipes}/>} />
            <Route path="/itemdetails" element={<ItemDetailsPage data = {recipes}/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
