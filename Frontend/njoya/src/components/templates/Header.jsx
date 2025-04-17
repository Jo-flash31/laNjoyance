import React, { useContext, useState } from 'react';
import './../../App.css';
import './header.css';
import { Link } from 'react-router';
import { AuthContext } from '../../utils/context/AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      {/* Logo */}
      <div className="logo">
        <img src="../../../src/images/njoya/LaNjoyance-logo.png" alt="logo" />
      </div>

      {/* Burger pour mobile */}
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menu de navigation */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-item">Accueil</Link>
        <Link to="/Produits" className="nav-item">Nos Produits</Link>
        <Link to="/Blog" className="nav-item">Blog</Link>
        <Link to="/Newsletters" className="nav-item">Newsletters</Link>
        <Link to="/Formulaires" className="nav-item">Formulaires</Link>
        <Link to="/Recettes" className="nav-item">Recettes</Link>
        {auth ? (
          <button onClick={logout} className="nav-item logout-btn">Déconnexion</button>
        ) : (
          <Link to="/login" className="nav-item">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
