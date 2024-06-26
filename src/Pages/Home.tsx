// src/pages/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import images from '../assets/images';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    // Passa o nome e a sala como estado
    navigate('/meeting', { state: { name, room } });
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <div className="form-container">
          <h2>Ingressar na reunião</h2>
          <input
            type="text"
            placeholder="Insira seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira o numero da sala"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={handleJoin}>Entrar</button>
        </div>
      </div>
      <footer>
        <img src={images.logo2} alt="Dimension Four Logo" />
        <p>Dimension Four</p>
      </footer>
    </div>
  );
};

export default Home;


