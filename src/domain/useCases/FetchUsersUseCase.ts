import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class FetchUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.fetchUsers();
  }
}
