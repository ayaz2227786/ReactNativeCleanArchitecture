import { ApiClient } from './ApiClient';

export class UserApi {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient();
  }

  async fetchUsersByCity(cityId: string) {
    return this.apiClient.get(`/users?cityId=${cityId}`);
  }

  async fetchUsers() {
    return this.apiClient.get(`/users`);
  }
}
