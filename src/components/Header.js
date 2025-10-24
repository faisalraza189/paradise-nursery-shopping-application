import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <header className="header">
      <Link to="/" className="header-left">
        <div className="logo">
          <div className="logo-icon">🌱</div>
        </div>
        <div className="company-info">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-tagline">Where Green Meets Serenity</p>
        </div>
      </Link>
      
      <nav className="header-nav">
        <Link to="/products" className="nav-link">Plants</Link>
      </nav>
      
      <div className="cart-icon-container">
        <Link to="/cart" className="cart-link">
          <svg 
            className="cart-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
