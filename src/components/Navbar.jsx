import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import CartIcon from "./CartIcon";
import {NavLink} from "react-router-dom"


function Navbar({ cartItems}) {

  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const cartCount = cartItems.reduce((total,
     item) => total + item.quantity, 0);

  return ( 
    <nav className="navbar">
      <h2 className="logo">Chuks Kitchen</h2>

      <ul className={ MenuOpen ? "nav-links active" : "nav-links" }>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}> Home</NavLink></li>
        <li><NavLink to="/explore" className={({ isActive }) => isActive ? "active-link" : ""}>Explore</NavLink></li>
        <li><NavLink to="/order" className={({ isActive }) => isActive ? "active-link" : ""}>My Orders</NavLink></li>
        <li><NavLink to="/account" className={({ isActive }) => isActive ? "active-link" : ""}>Account</NavLink></li>
      </ul>

      <div className="nav-right">

        <Link to="/cart" className="cart-wrapper">
        <CartIcon />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
              </span>
        )}
        </Link>

          <div className={MenuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar