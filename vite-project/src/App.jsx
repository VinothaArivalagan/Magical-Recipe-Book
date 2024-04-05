// App.js
import data from './recipes.json'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import List from './components/List';
import ListItem from './components/ListItem';
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
            <Route exact path="/" element={<Home data ={recipes}/>} />
            <Route path="/about" element={<About/>} />
            <Route exact path="/" element={<DashboardPage/>} />
            <Route path="/item/:id" element={<ItemDetailsPage/>} />

            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
