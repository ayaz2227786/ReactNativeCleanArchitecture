import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
  static async setData(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }

  static async getData(key: string) {
    return await AsyncStorage.getItem(key);
  }

  static async removeData(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
