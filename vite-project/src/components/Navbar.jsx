import logo from "../assets/Logo.gif";
import classes from "../components/styling/List.module.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <img src={logo} className={classes.logo} alt="App logo" />


      </ul>
    </nav>
  );
}

export default Navbar;
