import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

ApiClient.interceptors.request.use((config) => {
  console.log('Request:', config);
  return config;
});

ApiClient.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response.data;
  },
  (error) => {
    console.error('Error:', error);
    return Promise.reject(error);
  }
);
