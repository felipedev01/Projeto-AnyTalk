// src/components/Header.tsx
import React from 'react';
import './Header.css';
import images from '../assets/images'; // Importando o objeto de imagens

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={images.logo} alt="AnyTalk Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul className="icons-container">
          <li><img src={images.icon1} alt="Icon 1" className="icon" /></li>
          <li><img src={images.icon2} alt="Icon 2" className="icon" /></li>
          <li><img src={images.icon3} alt="Icon 3" className="icon" /></li>
          <li><img src={images.icon4} alt="Icon 3" className="icon" /></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;


