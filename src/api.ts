// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projeto-anytalk-back-end.onrender.com', // URL do backend
});

export default api;
