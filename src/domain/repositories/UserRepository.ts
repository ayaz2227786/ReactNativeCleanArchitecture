import { User } from '../entities/User';

export interface UserRepository {
  fetchUsers(): Promise<User[]>;
}
