// Redux
import LocalStorage from '../local';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Others
import EncryptedStorage from 'react-native-encrypted-storage';

export const logout = createAsyncThunk('logout', async (): Promise<void> => {
  // Clearing local storage
  LocalStorage.clearAll();
  EncryptedStorage.clear();
});
