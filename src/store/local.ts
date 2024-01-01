// Types
import { Auth } from '../types/entities';
import { STORAGE_KEY } from '../types/enums';
import { NoLocalAuthError } from '../types/errors';

// Others
import EncryptedStorage from 'react-native-encrypted-storage';
import { MMKV } from 'react-native-mmkv';

const LocalStorage = new MMKV();

export const getLocalAuth = async (): Promise<Auth> => {
  const user = await getUnsafeLocalAuth();
  if (!user) throw new NoLocalAuthError();
  return user;
};

export const getUnsafeLocalAuth = async (): Promise<Auth | undefined> => {
  const user = await EncryptedStorage.getItem(STORAGE_KEY.USER);
  if (!user) return undefined;
  try {
    return JSON.parse(user);
  } catch (error) {
    return undefined;
  }
};

export const setLocalAuth = (user: Auth) =>
  EncryptedStorage.setItem(STORAGE_KEY.USER, JSON.stringify(user));

export default LocalStorage;
