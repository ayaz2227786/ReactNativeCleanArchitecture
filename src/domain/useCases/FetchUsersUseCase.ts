import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export class FetchUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async executeByCity(cityId: string): Promise<User[]> {
    return this.userRepository.getUsersByCity(cityId);
  }

  async execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
