import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN SHOPPING CART</h2>
      </div>
      <ul className="navbar_links">
        <li>
          <Link to="/cart">
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
