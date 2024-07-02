import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Meeting from './Pages/Meeting';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register'
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/meeting" element={<PrivateRoute component={Meeting} />} />
      <Route path="/profile/*" element={<PrivateRoute component={Profile} />} />
      <Route path="/dashboard/*" element={<PrivateRoute component={Dashboard} />} />
      

    </Routes>
  );
};

export default App;


