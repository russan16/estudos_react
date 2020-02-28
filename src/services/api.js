import axios from 'axios';

const route = 'https://rocketseat-node.herokuapp.com/api';
const api = axios.create({baseURL: route});

export default api;