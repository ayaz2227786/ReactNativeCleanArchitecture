import { UserApi } from '../data/api/UserApi';
import { UserRepositoryImpl } from '../data/repositories/UserRepositoryImpl';
import { FetchUsersUseCase } from '../domain/useCases/FetchUsersUseCase';

// Dependency Injection
const userApi = new UserApi();
const userRepository = new UserRepositoryImpl(userApi);
export const fetchUsersUseCase = new FetchUsersUseCase(userRepository);
