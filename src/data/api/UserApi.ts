import { ApiClient } from './ApiClient';

export class UserApi {
  async fetchUsers() {
    return ApiClient.get('/users');
  }
}
