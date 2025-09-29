import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Chatbot from '../Chatbot/Chatbot';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo">Opdrape</span>
        </Link>
        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-menu">
          <div className="navbar-categories">
            <Link to="/category1" className="navbar-item">Category 1</Link>
            <Link to="/category2" className="navbar-item">Category 2</Link>
            <Link to="/category3" className="navbar-item">Category 3</Link>
          </div>
          <div className="navbar-actions">
            <Link to="/login" className="navbar-icon">
              <i className="fas fa-user"></i>
            </Link>
            <Link to="/cart" className="navbar-icon">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
      <Chatbot />
    </nav>
  );
};

export default Navbar;