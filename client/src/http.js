import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000', // Use Vite's import.meta.env
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;