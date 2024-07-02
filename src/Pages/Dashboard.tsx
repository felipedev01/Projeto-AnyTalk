import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import images from '../assets/images';

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const greetingName = localStorage.getItem('userName')
  console.log(greetingName)
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (name && room) {
      navigate('/meeting', { state: { name, room } });
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo-container">
          <img src={images.logo} alt="AnyTalk Logo" className="logo" />
        </div>
      </header>
      <div className="home-container">
        <div className="form-container">
          <h2>Bem-vindo, {greetingName}!</h2>
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

export default Dashboard;

