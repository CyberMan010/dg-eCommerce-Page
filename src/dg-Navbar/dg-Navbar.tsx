import './dg-Navbar_style.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const DgNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

  return (
     <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
        <div className="menu-items">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}