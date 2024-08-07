import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import images from '../assets/images';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (name && room) {
      navigate('/meeting', { state: { name, room } });
    }
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <div className="form-container">
          <h2>Bem-vindo ao AnyTalk</h2>
          <input
            type="text"
            placeholder="Insira seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira o número da sala"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={handleJoin}>Entrar na reunião</button>
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


