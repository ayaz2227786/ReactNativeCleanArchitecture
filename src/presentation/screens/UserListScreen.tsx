import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useFetchUsers } from '../../hooks/useFetchUsers';

const UserListScreen = () => {
  const { users, isLoading, error, clearLocalStorage } = useFetchUsers();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching users</Text>;

  return (
    <View style={styles.container}>
      <Button title="Clear Local Storage" onPress={clearLocalStorage} />
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
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { fontSize: 16, color: 'gray' },
});

export default UserListScreen;
