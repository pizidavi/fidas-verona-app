// Redux
import LocalStorage from './local';
import rootReducer from './slices';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, Storage } from 'redux-persist';

export const storage: Storage = {
  setItem: (key, value) => {
    LocalStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = LocalStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    LocalStorage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
