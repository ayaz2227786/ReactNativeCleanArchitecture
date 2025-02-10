import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsersUseCase } from '../di/Container';
import { LocalStorage } from '../data/storage/LocalStorage';
import { User } from '../domain/models/User';

export const useFetchUsers = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetchUsersUseCase.execute(),
  });

  const clearLocalStorage = async () => {
    await LocalStorage.removeData('users_data');
    queryClient.invalidateQueries(['users']);
  };

  return { users, isLoading, error, clearLocalStorage };
};
