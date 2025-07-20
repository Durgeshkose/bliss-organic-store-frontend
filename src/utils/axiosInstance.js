// src/utils/axiosInstance.js
import axios from 'axios';

const backendURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true, // needed if we are using cookies
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
