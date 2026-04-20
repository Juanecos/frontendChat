// src/shared/lib/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', //? Cambia a la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agregar un interceptor para añadir el JWT al header
axiosInstance.interceptors.request.use((config) => {
	//! Aqui importante, el token no se guarda en localstorage Nunca, mejor es una variable global cuando esta autenticado
  const token = localStorage.getItem('access_token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;