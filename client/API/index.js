import axios from 'axios';

const API = axios.create({baseURL: "http://192.168.0.14:27017"})

export const getUser = () => API.get('User/get');
export const addUser = (user) => API.post('User/post', user);
export const getData = () => API.get('Data/get');