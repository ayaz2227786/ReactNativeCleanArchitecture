import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import ApiClient from '../api/ApiClient';

export class UserRepositoryImpl implements UserRepository {
  async fetchUsers(): Promise<User[]> {
    const response = await ApiClient.get<User[]>('/users');
    return response.data;
  }
}
