import { User } from '../models/User';

export interface UserRepository {
  getUsersByCity(cityId: string): Promise<User[]>;
  getUsers(): Promise<User[]>;
}

