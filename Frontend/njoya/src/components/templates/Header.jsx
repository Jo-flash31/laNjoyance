import React from 'react';
import './../../App.css';
import { Link } from 'react-router';
import './header.css';


const Header = () => {
    return (
        <header className="header">
           

            {/* Navbar */}
            <nav className="navbar">
              <div className='navflex'>
                 {/* Logo */}
            <div className="logo-container ">
                <img src="/images/njoya/LaNjoyance-logo.png" alt="logo" className="logo" />
            </div>
                 
                <Link to="/" className="nav-item">Accueil</Link>
                <Link to="/produits" className="nav-item">Nos Produits</Link>
                <Link to="/blog" className="nav-item">Blog</Link>
                <Link to="/newsletters" className="nav-item">Newsletters</Link>
                <Link to="/formulaires" className="nav-item">Formulaires</Link>
                <Link to="/particulier" className="nav-item">Particulier</Link>
               </div>  
            </nav>
        </header>
    );
};

export default Header;
