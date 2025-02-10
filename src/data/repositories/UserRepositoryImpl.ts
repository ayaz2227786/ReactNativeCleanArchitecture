import { UserApi } from '../api/UserApi';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/models/User';

export class UserRepositoryImpl implements UserRepository {
  private userApi: UserApi;

  constructor(userApi: UserApi) {
    this.userApi = userApi;
  }
  async getUsers(): Promise<User[]> {
    const response = await this.userApi.fetchUsers();
    return response.data; // Adjust according to the API response structure
  }

  async getUsersByCity(cityId: string): Promise<User[]> {
    const response = await this.userApi.fetchUsersByCity(cityId);
    return response.data; // Adjust according to the API response structure
  }
}
