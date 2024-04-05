import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';




function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;