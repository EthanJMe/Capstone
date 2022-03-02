import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})

export const getUser = () => API.get('/get');
export const addUser = (user) => API.post('/post', user);