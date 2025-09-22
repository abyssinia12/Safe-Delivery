import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Safe Delivery</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cafes" className="nav-link">
          Cafes
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        
      </div>
      <div>
        <button className="btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
