import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <aside className="sidebar">
      <div style={{ display: 'flex' }}>
      <ul>
        <li><Link to="/">Home</Link></li> </ul>
        <ul>
        <li><Link to="/about">About</Link></li></ul>
        <ul>
        <li><Link to="/dashboard">Dashboard</Link></li></ul>
        <ul>
        <li><Link to="/itemdetails">Item Details</Link></li>
      </ul>
      </div>
    </aside>
    
  );

}


export default Sidebar;