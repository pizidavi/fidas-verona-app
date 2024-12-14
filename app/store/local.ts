// Utils
import { appLog } from '../utils/logger';

// Types
import type { Auth } from '../types/entities';
import { SECURE_STORAGE_KEY } from '../types/enums';
import { NoLocalAuthError } from '../types/errors';

// Others
import * as SecureStore from 'expo-secure-store';
import { MMKVLoader } from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

export const LocalStorage = {
  getItem: (key: string) => MMKV.getString(key) ?? null,
  setItem: (key: string, value: string) => {
    MMKV.setString(key, value);
  },
  removeItem: (key: string) => {
    MMKV.removeItem(key);
  },
};

export const getLocalAuth = async (): Promise<Auth> => {
  const user = await getUnsafeLocalAuth();
  if (!user) throw new NoLocalAuthError();
  return user;
};

export const getUnsafeLocalAuth = async (): Promise<Auth | undefined> => {
  const user = await SecureStore.getItemAsync(SECURE_STORAGE_KEY.USER);
  if (!user) return undefined;
  try {
    return JSON.parse(user) as Auth;
  } catch (error) {
    appLog.error('Error parsing Auth json', error);
    return undefined;
  }
};

export const setLocalAuth = (user: Auth) =>
  SecureStore.setItem(SECURE_STORAGE_KEY.USER, JSON.stringify(user));
