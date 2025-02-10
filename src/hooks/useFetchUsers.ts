import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsersUseCase } from '../di/Container';
import { LocalStorage } from '../data/storage/LocalStorage';
import { User } from '../domain/models/User';

export const useFetchUsers = (cityId: string) => {
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery<User[]>({
    queryKey: ['users', cityId],
    queryFn: () => fetchUsersUseCase.execute(cityId),
    enabled: !!cityId,
  });

  // const { data: users, isLoading, error } = useQuery<User[]>({
  //   queryKey: ['users', cityId],
  //   queryFn: () => fetchUsersUseCase.execute(),
  //   enabled: !!cityId,
  // });

  const clearLocalStorage = async () => {
    await LocalStorage.removeData('users_data');
    queryClient.invalidateQueries(['users']);
  };

  return { users, isLoading, error, clearLocalStorage };
};
