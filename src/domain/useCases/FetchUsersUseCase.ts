import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export class FetchUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
