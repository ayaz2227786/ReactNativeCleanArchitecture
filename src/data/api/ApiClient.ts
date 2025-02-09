import axios from 'axios';

const ApiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiClient;
