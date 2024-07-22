// Types
import { Company, User } from './entities';

export type ConfigStore = {
  favoriteDonationsCenterIds: number[];
  toggleFavoriteDonationsCenter: (id: number) => void;
  removeFavoriteDonationsCenter: (id: number) => void;
};

export type DataStore = {
  company?: Company;
  setCompany: (company: Company) => void;
};

export type AuthStore = {
  user?: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};
