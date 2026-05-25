import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import CartIcon from "./CartIcon";


function Navbar({ cartItems}) {

  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const cartCount = cartItems.reduce((total,
     item) => total + item.quantity, 0);

  return ( 
    <nav className="navbar">
      <h2 className="logo">Chukks Kitchen</h2>

      <ul className={ MenuOpen ? "nav-links active" : "nav-links" }>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/order">My Orders</Link></li>
        <li><Link to="/account">Account</Link></li>
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

          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar