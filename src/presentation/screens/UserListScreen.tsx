import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useFetchUsers } from '../../hooks/useFetchUsers';

const UserListScreen = ({ cityId1 }: { cityId1: string }) => {
  const cityId = 1222;
  const { users, isLoading, error, clearLocalStorage } = useFetchUsers(cityId);

  if (isLoading) return <ActivityIndicator style={styles.loader} />;
  if (error) return <Text style={styles.error}>Error fetching users</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { flex: 1, justifyContent: 'center', alignItems: 'center', color: 'red' },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { fontSize: 16, color: 'gray' },
});

export default UserListScreen;
