import React, { useState, useEffect } from 'react';

// Header component - Converted from original HTML header section
// No visual or behavioral changes - pure mechanical migration
const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Mobile menu toggle logic - converted from inline script
  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleLinkClick = () => {
    setIsMenuActive(false);
  };

  return (
    <header>
      <div className="logo">
        <h1>Vibin V</h1>
      </div>
      {/* Mobile Menu Toggle */}
      <button 
        className={`menu-toggle ${isMenuActive ? 'active' : ''}`} 
        id="menuToggle" 
        aria-label="Toggle navigation"
        onClick={handleMenuToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`navbar ${isMenuActive ? 'show' : ''}`} aria-label="Main navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
