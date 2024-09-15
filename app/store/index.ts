// Store
import { LocalStorage } from './local';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Types
import { SECURE_STORAGE_KEY } from '../types/enums';
import { AuthStore, ConfigStore, DataStore } from '../types/store';

// Others
import * as SecureStore from 'expo-secure-store';

export const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      user: undefined,
      setUser: user => set({ user }),
      logout: () => {
        set({ user: null });
        Object.values(SECURE_STORAGE_KEY).forEach(value => SecureStore.deleteItemAsync(value));
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => LocalStorage),
    },
  ),
);

export const useDataStore = create(
  persist<DataStore>(
    set => ({
      company: undefined,
      setCompany: company => set({ company }),
    }),
    {
      name: 'data-store',
      storage: createJSONStorage(() => LocalStorage),
    },
  ),
);

export const useConfigStore = create(
  persist<ConfigStore>(
    set => ({
      favoriteDonationsCenterIds: [],
      toggleFavoriteDonationsCenter: id =>
        set(state => ({
          favoriteDonationsCenterIds: state.favoriteDonationsCenterIds.includes(id)
            ? state.favoriteDonationsCenterIds.filter(favId => favId !== id)
            : [...state.favoriteDonationsCenterIds, id],
        })),
      removeFavoriteDonationsCenter: id =>
        set(state => ({
          favoriteDonationsCenterIds: state.favoriteDonationsCenterIds.filter(
            favId => favId !== id,
          ),
        })),
    }),
    {
      name: 'config-store',
      storage: createJSONStorage(() => LocalStorage),
    },
  ),
);
