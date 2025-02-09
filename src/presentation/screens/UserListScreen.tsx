import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { UserRepositoryImpl } from '../../data/repositories/UserRepositoryImpl';
import { FetchUsersUseCase } from '../../domain/useCases/FetchUsersUseCase';

const UserListScreen = () => {
  const userRepository = new UserRepositoryImpl();
  const fetchUsersUseCase = new FetchUsersUseCase(userRepository);

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'], // Updated to object-based syntax
    queryFn: () => fetchUsersUseCase.execute(),
  });

  if (isLoading) return <ActivityIndicator style={styles.loader} />;
  if (error) return <Text style={styles.error}>Error fetching users</Text>;

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { flex: 1, justifyContent: 'center', alignItems: 'center', color: 'red' },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { fontSize: 16, color: 'gray' },
});

export default UserListScreen;
