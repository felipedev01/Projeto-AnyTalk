// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Meeting from './Pages/Meeting';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meeting" element={<Meeting />} />
    </Routes>
  );
};

export default App;

