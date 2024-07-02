import React from 'react';
import './Header.css';
import images from '../assets/images';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={images.logo} alt="AnyTalk Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul className="auth-links">
          <li><a href="/login" className="auth-link">Entrar</a></li>
          <li><a href="/register" className="auth-link">Registrar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



