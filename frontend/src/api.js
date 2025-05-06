import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});
// All requests made with this "API" Instance will have this URL in begining.

export default API;
