import { useState, useRef, useEffect } from "react";
import "./Navbar.css"
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom"


function Navbar({ cartItems}) {

  const [MenuOpen, setMenuOpen] = useState(false);
  //ref for the menu to detect clicks outside of it
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      //if the click is outside the menu, close the menu
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const cartCount = cartItems.reduce((total,
     item) => total + item.quantity, 0);

  return ( 
    <nav className="navbar" ref={menuRef}>
      <h2 className="logo">Chuks Kitchen</h2>

      <ul className={ MenuOpen ? "nav-links active" : "nav-links" } ref={menuRef}>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}> Home</NavLink></li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/explore" className={({ isActive }) => (isActive ? "active-link" : "")}>Explore</NavLink></li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/order" className={({ isActive }) => (isActive ? "active-link" : "")}>My Orders</NavLink></li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/account" className={({ isActive }) => (isActive ? "active-link" : "")}>Account</NavLink></li>
      </ul>

      <div className="nav-right">

        <NavLink to="/cart" className="cart-wrapper">
        <CartIcon />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
              </span>
        )}
        </NavLink>

          <div className={MenuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu} ref={menuRef}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar