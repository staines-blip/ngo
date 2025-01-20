import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png'; // Path to your logo
import cart from '../Assets/cart.png'; // Path to your cart icon
import heart from '../Assets/heart-logo.png'; // Path to your heart icon
import user from '../Assets/user.png'; // Path to your user icon
import { CartContext } from '../../CartContext'; // Import CartContext

export const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { cartCount } = useContext(CartContext); // Use cartCount from CartContext

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Shop</p>
      </div>
      {/* Navigation Menu */}
      <ul className="nav-menu">
      <li>
          <NavLink to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>

      
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/blockprinting" activeClassName="active">
            Blockprinting
          </NavLink>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li><NavLink to="/towels">Towels</NavLink></li>
              <li><NavLink to="/bedsheets">Bedsheets</NavLink></li>
              <li><NavLink to="/napkins">Napkins</NavLink></li>
              <li><NavLink to="/bags">Bags</NavLink></li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/cupcoaster" activeClassName="active">Cupcoaster</NavLink>
        </li>
        <li>
          <NavLink to="/paperfiles" activeClassName="active">Paperfiles</NavLink>
        </li>
        <li>
          <NavLink to="/bamboo" activeClassName="active">Bamboo</NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="active">Admin</NavLink>
        </li>
      </ul>

      {/* Icons and Login Section */}
      <div className="nav-icons">
        {/* Wishlist */}
        <NavLink to="/wishlist">
          <div className="nav-icon">
            <img src={heart} alt="Heart" className="nav-heart-logo" />
          </div>
        </NavLink>

        {/* Cart */}
        <div className="nav-cart">
          <NavLink to="/cart" className="nav-cart-link">
            <img src={cart} alt="Cart" className="nav-cart-icon" />
            <div className="nav-cart-count">{cartCount}</div> {/* Dynamic count */}
          </NavLink>
        </div>

        {/* Login Button */}
        <NavLink to="/login">
          <img src={user} alt="User" className="nav-user-icon" />
        </NavLink>
      </div>
    </div>
  );
};
