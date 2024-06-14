import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../sass/components/header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={require('../assets/logo.png')} alt="logo" id="logo" />
        </a>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>À propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
