import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
        <Link to="/"> Home </Link>  </li>
        <li>        
        <Link to="/about"> About </Link>  </li>    
        <li>
        <Link to="/dashboard"> DashBoard </Link> </li>
        <li>
        <Link to="/itemdetails"> Item Details</Link> </li>
        <li>
        <Link to="/notfound">  </Link> 
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;