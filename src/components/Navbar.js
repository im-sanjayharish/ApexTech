import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/apex-tech-navbar-logo.png';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {/* <span className="logo-text">Apex Tech</span>
          <span className="logo-accent">⚡</span> */}
          <img src={logo} alt="Apex Tech Logo" className="logo-image" />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <button 
              className="nav-link nav-btn"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              className="nav-link nav-btn"
              onClick={() => scrollToSection('gallery')}
            >
              Gallery
            </button>
          </li>
          <li>
            <button 
              className="nav-link nav-btn"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
          <li>
            <Link to="/build" className="nav-link nav-cta">
              Build Now
            </Link>
          </li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          <span className="theme-icon">
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;