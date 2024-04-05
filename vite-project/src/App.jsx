// App.js
import recipes from './recipes.json'
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

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <List data={recipes} />
        <div className="content">
          <Routes>
            <Route exact path="/" component={<Home/>} />
            <Route path="/about" component={<About/>} />
            <Route exact path="/" component={<DashboardPage/>} />
            <Route path="/item/:id" component={<ItemDetailsPage/>} />
            <Route path="/about" component={<About/>} />
            <Route component={<NotFoundPage/>} />
            </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
