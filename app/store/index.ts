// Store
import { LocalStorage } from './local';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Types
import { AuthStore, ConfigStore, DataStore } from '../types/store';

export const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      user: undefined,
      setUser: user => set({ user }),
      logout: () => set({ user: null }),
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
