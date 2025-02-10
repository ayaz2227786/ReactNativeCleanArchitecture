import axios from 'axios';

export class ApiClient {
  private client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
  });

  async get(endpoint: string) {
    return this.client.get(endpoint);
  }
}
