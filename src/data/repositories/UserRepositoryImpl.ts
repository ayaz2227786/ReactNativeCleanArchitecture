import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserApi } from '../api/UserApi';
import { User } from '../../domain/models/User';

export class UserRepositoryImpl implements UserRepository {
  private userApi: UserApi;

  constructor(userApi: UserApi) {
    this.userApi = userApi;
  }

  async getUsers(): Promise<User[]> {
    return this.userApi.fetchUsers();
  }
}
