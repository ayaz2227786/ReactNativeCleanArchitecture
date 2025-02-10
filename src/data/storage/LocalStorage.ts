import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
  static async saveData(key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async getData<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  static async removeData(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
